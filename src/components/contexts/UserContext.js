import React, { useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const UserContext = React.createContext();
const LoginContext = React.createContext();
const SignupContext = React.createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

export const useSignup = () => {
  return useContext(SignupContext);
};

export const UserProvider = ({ children }) => {
  let user = { id: "", email: "", firstName: "", lastName: "" };
  let history = useHistory();

  const login = (email, password) => {
    return axiosWithAuth()
      .post("/api/auth/login", { email, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("firstName", res.data.user.firstName);
        localStorage.setItem("lastName", res.data.user.lastName);
        localStorage.setItem("id", res.data.user.id);
        localStorage.setItem("email", res.data.user.email);

        history.push("/");
      });
  };

  const signup = (firstName, lastName, email, password) => {
    return axiosWithAuth()
      .post("/api/auth/singup", {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      })
      .then((res) => console.log(res))
      .catch(err => (console.log(err)))
  };

  return (
    <UserContext.Provider value={user}>
      <LoginContext.Provider value={login}>
        <SignupContext.Provider value={signup}>
          {children}
        </SignupContext.Provider>
      </LoginContext.Provider>
    </UserContext.Provider>
  );
};
