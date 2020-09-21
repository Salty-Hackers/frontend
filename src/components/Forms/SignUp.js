import React from 'react'
import './Login.css'
import { useSignup } from "../contexts/UserContext";

export default function SignUp() {
    const signup = useSignup()

    const [firstName, setFirstName] = React.useState("");
    const[lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [newPassword, reSetPassword] = React.useState("");
  
  
    const handleSubmit = (event) => {
      console.log(`
        Email: ${email}
        Password: ${password}
  
      `);
  
      event.preventDefault();

      signup(firstName, lastName, email, password)
    }
  
    return (
        <>
      
      <form onSubmit={handleSubmit} id="loginform">
        <h1>Create Account</h1>

        <label>
          <p>First Name</p>
          <input
            name="firstName"
            type="name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required />
        </label>

        <label>
          <p>Last Name</p>
          <input
            name="lastName"
            type="name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required />
        </label>
  
        <label>
          <p>Email:</p>
          <input
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required />
        </label>
  
        <label>
          <p>Create Password:</p>
          <input
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required />
        </label>
        <label>
          <p>Re-enter Password:</p>
          <input
            name="newPassword"
            type="password"
            id="confirm"
            value={newPassword}
            onChange={(e) => reSetPassword(e.target.value)}
            required
          />
        </label>

  
        <button>Submit</button>
      </form>
   
     </>
    );
  }