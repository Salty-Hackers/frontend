import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Form.css";
import * as yup from "yup";
import schema from "./validate-signup.js";
import { useSignup } from "../contexts/UserContext";



function SignUp() {
  const signup = useSignup();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const handleChange = (event) => {
    console.log(event.target);
    validate(event.target.name, event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(user.firstName, user.lastName, user.email, user.password);
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.email);
    console.log(user.password);
    console.log(user.confirmPassword);
  };

  // Validation - TLTsay

  const initialFormErrors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const initialDisabled = true;

  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };
  

  useEffect(() => {
    schema.isValid(user).then((valid) => {
      setDisabled(!valid);
    });
  }, [user]);

  

  return (
    <div className="logIn">
      <form onSubmit={(event) => handleSubmit(event)} id="loginform">
        <h1>Sign Up</h1>

        <label>
          <p> Already have an account? </p>
          <br></br>
          <Link to="/login">Login here!</Link>
          <br></br>
          <br></br>
        </label>

        <label>
          <p> Enter First Name:</p>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={(event) => handleChange(event)}
            maxLength="30"
          />
          {formErrors.firstName}
        </label>
        <label>
          Enter Last Name:
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={(event) => handleChange(event)}
            maxLength="30"
          />
          {formErrors.lastName}
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={(event) => handleChange(event)}
            value={user.email}
            maxLength="30"
          />
          {formErrors.email}
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(event) => handleChange(event)}
            value={user.password}
            maxLength="30"
          />
          {formErrors.password}
        </label>
        <label>
          Re-enter Password:
          <input
            type="password"
            name="confirmPassword"
            onChange={(event) => handleChange(event)}
            value={user.confirmPassword}
            maxLength="30"
          />
          {formErrors.confirmPassword}
        </label>
        <button disabled={disabled}
          >Submit!</button>
      </form>
    </div>
  );
}

export default SignUp;
