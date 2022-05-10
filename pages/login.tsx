import Link from "next/link";
import React,{FC, useState} from "react";
import { useRouter } from "next/router";
import {useUserContext} from "../Components/userContext";

const Login:FC =() =>{
  const router = useRouter();
  const [email,setEmail] = useState("");
  const[password,setPassword] = useState(""); 
  const {login, user} = useUserContext();
  const login2 = async () =>{
    
    try{
      if(login){
       let x = await login(email,password)
       console.log(x)
      }
    }
    catch(e){
      return 
    }
    
  };
if(user?.user.email){
  router.push('/')
}

  return (
  <>
  <h1>Log In</h1>
  <form>
  <div className="mb-3">
    <label htmlFor="email">Email:</label>
    <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} required/>
    </div>
    <div className="mb-3">
    <label htmlFor="password">Password:</label>
    <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <button type="button" onClick={()=>login2()}>Log In</button>
  </form>
  </>
);
}
export default Login