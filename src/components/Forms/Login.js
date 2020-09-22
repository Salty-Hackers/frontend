import React from "react";
import "./Form.css";
import * as yup from "yup";
import schema from "./validate-login.js";

const initialFormErrors = {
  email: "",
  password: "",
};
const initialDisabled = true;

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    // console.log(`
    // Email: ${email}
    // Password: ${password}
    // `);
    event.preventDefault();
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
      setDisabled(!valid);
    });
  }, [email]);

  React.useEffect(() => {
    schema.isValid(password).then((valid) => {
      setDisabled(!valid);
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
          {formErrors.email}
          <br></br>
        </label>

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
          {formErrors.password}
          <br></br>
        </label>

        <button disabled={disabled}>Submit</button>
      </form>
    </>
  );
}
