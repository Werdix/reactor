import Link from "next/link";
import React,{FC, useState} from "react";
import { useRouter } from "next/router";
import {useUserContext} from "../Components/userContext";

const Login:FC =() =>{
  const router = useRouter();
  const [email,setEmail] = useState("");
  const[password,setPassword] = useState(""); 
  const {login, user} = useUserContext();
  const login2 = () =>{
    if(login){
      login(email,password);
    }
  };
if(user?.user.email){
  router.push('/')
}
  return (
  <>
  <h1>Log In</h1>
  <form>
    <label>Email:</label>
    <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} required/>
    <label>Password:</label>
    <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
    <button type="button" onClick={()=>login2()}>Log In</button>
  </form>
  </>
);
}
export default Login