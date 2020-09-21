import React from 'react'
import { useState } from 'react'
import './Login.css'
<<<<<<< HEAD
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
        FirstName: ${firstName}
        Lastname: ${lastName}
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
       <br></br>
=======


function SignUp() {
  const [user, setUser] = useState({ 
    firstName: "", 
    lastName: "", 
    email:"", 
    password: "", 
    confirmPassword: ""
   });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.email);
    console.log(user.password);
    console.log(user.confirmPassword);
  };
>>>>>>> e471dee0beb495f416c59d744d8dc792d2e9398f

  return (
    <div className="logIn">
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)} id ="loginform">
        <label>
         <p> Enter First Name:</p>
          <input
            type="text"
            name="name"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Enter Last Name:
          <input
            type="text"
            name="name"
            onChange={event => handleChange(event)}
          />
          </label>
           <label>
        Email:
          <input
            type="text"
            name="email"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={event => handleChange(event)}
          />
       
        </label>
        <label>
          Re-enter Password:
          <input
            type="password"
            name="confirmPassword"
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default SignUp;
  