import * as admin from 'firebase-admin';
import * as serviceAccount from '../firebase.config.json';
import { getFirestore } from 'firebase-admin/firestore';

const createApp = ()=>{
  
  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://gymrate-e733a.appspot.com",
    databaseURL: "https://gymrate-e733a.firebaseio.com/",
  });
}
export const getApp = () => {
  try{
    admin.instanceId()
  }
  catch(e) {
    createApp();
  }
  return admin.app()
}
export const db = () => {
  return getFirestore(getApp());
} 
export const getCollection = <T>(colName: string) => {
  return db().collection(colName) as FirebaseFirestore.CollectionReference<T>;
};