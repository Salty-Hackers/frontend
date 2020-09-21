import React from "react";
import './Login.css'




export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
    `);

    event.preventDefault();
  }

  return (
    <>
   
    <form onSubmit={handleSubmit} id="loginform">
      <h1>Log In</h1>

      <label>
       <p>Email:</p>
       <br/>
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