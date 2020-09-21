import React from "react";
import "./Login.css";
import * as yup from "yup";
import schema from "./validate-login.js";
import { useLogin } from "../contexts/UserContext";
const initialFormErrors = {
  email: "",
  password: "",
};
const initialDisabled = true;

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
  };

  // Validation - TLTsay
  const [formErrors, setFormErrors] = React.useState(initialFormErrors);
  const [disabled, setDisabled] = React.useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      //if successful validation = empty error message
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      //if unsucessful = set error message from validate-login.js
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  React.useEffect(() => {
    schema.isValid(email).then((valid) => {
      setDisabled(false);
    });
  }, [email]);

  React.useEffect(() => {
    schema.isValid(password).then((valid) => {
      setDisabled(false);
    });
  }, [password]);

  return (
    <>
      <form onSubmit={handleSubmit} id="loginform">
        <h1>Log In</h1>

        <label>
          <p>Email:</p>
          <br />
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              validate("email", e.target.value);
              setEmail(e.target.value);
            }}
            required
          />

        </label>
        <div className="form-errors">{formErrors.email}</div>
        <br />
        <label>
          <p>Password:</p>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              validate("password", e.target.value);
              setPassword(e.target.value);
            }}
            required
          />

        </label>
        
        <div className="form-errors">{formErrors.password}</div>
          <br />
        <button disabled={disabled}>Submit</button>
      </form>
    </>
  );
}
