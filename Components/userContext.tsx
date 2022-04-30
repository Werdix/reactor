import { initializeApp } from "firebase/app";
import { Auth, createUserWithEmailAndPassword,
   fetchSignInMethodsForEmail, getAuth, onAuthStateChanged,
    signInWithEmailAndPassword, signOut,
   User as FirebaseUser } from "firebase/auth";
import React, { useCallback, useContext, useEffect, useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyBLOul4Z2wWMGypr-EiLl1qm1TM2d12FvQ",
    authDomain: "gymrate-e733a.firebaseapp.com",
    projectId: "gymrate-e733a",
    storageBucket: "gymrate-e733a.appspot.com",
    messagingSenderId: "914853894923",
    appId: "1:914853894923:web:d5bd1dcf23f23052d9e00e",
    measurementId: "G-H0S5P0P0WQ"
  };
export type User = {
  user: FirebaseUser,
  data: any;
}

export type UserContextProps = {
  user?: User;
  loading: boolean;
  logout?: () => Promise<void>;
  login?: (username: string, password: string) => Promise<FirebaseUser>;
  createUser?: (username: string, password: string) => Promise<FirebaseUser>;
  userExists?: (username: string) => Promise<boolean>;
  deleteUser?: (password: string) => Promise<void>;
};
let auth: Auth;
//@ts-ignore
const UserContext = React.createContext<UserContextProps>(null);
const login = async (username: string, password: string) => {
  const cred = await signInWithEmailAndPassword(auth, username, password);
  return cred?.user;
};
const logout = async () => {
  return await signOut(auth);
};
const createUser = async (username: string, password: string) => {
  const cred = await createUserWithEmailAndPassword(auth, username, password);
  return cred?.user;
};
const deleteUser = async (password: string) => {
  const email = auth?.currentUser?.email;
  if (!email) 
     throw new Error('Action has failed');
  await signInWithEmailAndPassword(auth, email, password);
  await auth!.currentUser?.delete();
};
const userExists = async (email: string) => {
  try {
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    return !!signInMethods.length;
  } catch (e) {
    if (e?.code !== 'auth/invalid-email') throw e;
    return false;
  }
};

const initializeFirebase = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  auth = getAuth(app);
};
const defaultState: Pick<UserContextProps, 'user' | 'loading'> = {
  loading: true,
};
const createFullUser = (user: FirebaseUser) : User  => {
  //todo: take or fetch proper data
  return { user, data: { /* any data */ } };
};

export const UserContextProvider: React.FC = ({
  children,
}) => {
  const [{ loading, user }, setUser] = useState(defaultState);
  useEffect(() => {
    initializeFirebase();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser({ loading: false, user: user ? createFullUser(user) : null });
      //@ts-ignore - for dev purposes
      window.myLogout = user
        ? () => logout().then(() => console.log('User has logout.'))
        : () => console.log('No one was here..');
    });
    return () => unsubscribe();
  }, []);

  const hasUser = !loading && !!user;
  return (
    <UserContext.Provider
      value={{
        user,
        logout: hasUser ?  logout : undefined,
        login: hasUser ? undefined :  login,
        createUser: hasUser ? undefined :  createUser,
        userExists: hasUser ? undefined : userExists,
        deleteUser: hasUser ?  deleteUser : undefined,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  //during SSR rendering, when componenet is probed in getDataFromTree() useContext may return null;
  return useContext(UserContext) ?? (defaultState as UserContextProps);
};