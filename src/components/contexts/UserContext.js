import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const UserContext = React.createContext();
const LoginContext = React.createContext();

export function useLogin() {
  return useContext(LoginContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({ email: "", comments: ""});
  let history = useHistory();

  function login(email, password) {
    return axiosWithAuth()
      .post("/api/auth/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/");
      });
  }

  return (
    <UserContext.Provider value={user}>
      <LoginContext.Provider value={login}>{children}</LoginContext.Provider>
    </UserContext.Provider>
  );
}
