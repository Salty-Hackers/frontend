import React from "react";
import { useState, useEffect } from "react";
import "./Form.css";
import * as yup from "yup";
import schema from "./validate-signup.js";

function SignUp() {
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
      {/* {console.log(user)} */}
      <form onSubmit={(event) => handleSubmit(event)} id="loginform">
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
        <button disabled={disabled}>Submit!</button>
      </form>
    </div>
  );
}

export default SignUp;
