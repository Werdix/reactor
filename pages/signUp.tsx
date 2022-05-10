import React,{FC, useState} from "react";
import {useUserContext} from "../Components/userContext";
import { useRouter } from "next/router";

const SignUp:FC = () =>{
  const [email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const router = useRouter(); 
  const {createUser} = useUserContext();
  const create = () =>{
    if(createUser){
      
      createUser(email,password)
      router.push("/login");
    }    
  };
return (
  <>
  <h1>Sign Up</h1>
  <form>
    <div className="mb-3">
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" required onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="mb-3">
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <button type="button" onClick={()=>create()}>Sign Up</button>
  </form>
  </>
);
}
export default SignUp