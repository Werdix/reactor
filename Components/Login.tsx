import React,{FC, useRef} from "react";
import {} from "./userContext";
import {} from "firebase/auth";
export const Login:FC = () =>{
  const emailRef = useRef();
  const passwordRef = useRef();

return (
  <>
  <h1>Log In</h1>
  <form>
    <label>Email:</label>
    <input type="email" id="email" required></input>
    <label>Password:</label>
    <input type="password" name="password"></input>
    <input type="submit">Log In</input>
  </form>
  </>
);
}
