import Link from "next/link";
import React,{FC, useState} from "react";
import Home from ".";
import {useUserContext} from "../Components/userContext";
import { useRouter } from "next/router";

const SignUp:FC = () =>{
  const [email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const router = useRouter(); 
  const {createUser,user} = useUserContext();
  const create = () =>{
    createUser?.(email,password)
    router.push("/")
  }
return (
  <>
  <h1>Sign Up</h1>
  <form>
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" required onChange={(e)=>setEmail(e.target.value)}/>
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
    <button type="button" onClick={()=>create()}>Log In</button>
  </form>
  </>
);
}
export default SignUp