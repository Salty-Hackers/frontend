import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import * as yup from "yup";
import schema from "./validate-login.js";
import { useLogin } from "../contexts/UserContext";
import axios from "axios";

const initialUser = {
  email: "",
  password: "",
};

const initialFormErrors = {
  email: "",
  password: "",
};

export default function Login() {
  const login = useLogin();
  const [user, setUser] = React.useState(initialUser);
  const initialDisabled = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    login(user.email, user.password);
  };

  // Insult - Pair programmed
  const [insult, setInsult] = React.useState(
    "Fascinating story, in what chapter do you shut the fuck up?"
  );
  React.useEffect(() => {
    axios
      .get(
        `https://api.fungenerators.com/taunt/generate?category=pirate-insult
      `
      )
      .then((res) => {
        setInsult(res.data.contents.taunts);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

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
    schema.isValid(user).then((valid) => {
      setDisabled(!valid);
    });
  }, [user]);

  return (
    <>
      <form onSubmit={handleSubmit} id="loginform">
        <p>Your Daily Insult: {insult}</p>
        <br></br>
        <h1>Log In</h1>

        <label>
          <p>Email:</p>
          <br />
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={(e) => {
              validate(e.target.name, e.target.value);
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
            required
          />
        </label>
        <div id="form-errors" className="form-errors">
          {formErrors.email}
        </div>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={(e) => {
              validate(e.target.name, e.target.value);
              setUser({ ...user, [e.target.name]: e.target.value });
            }}
            required
          />
        </label>

        <div id="form-errors" className="form-errors">
          {formErrors.password}
        </div>
        <br />
        <button disabled={disabled}>Submit</button>

        <label>
          <p>
            {" "}
            <br></br> Don't have an account? <br></br>
          </p>
          <Link id="login-link" to="/signup">
            Sign up here!
          </Link>
        </label>
      </form>
    </>
  );
}
