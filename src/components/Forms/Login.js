import React from "react";
import './Login.css'

import { useLogin } from "../contexts/UserContext";



export default function Login() {
  const login = useLogin();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
    `);
    
    event.preventDefault();
    login(email, password);
  }

  return (
    <>
   
    <form onSubmit={handleSubmit} id="loginform">
      <h1>Log In</h1>

      <label>
       <p> Email:</p>
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>

      <label>
        <p>Password:</p>
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>

     


      <button>Submit</button>
    </form>
    
    </>
  );
}