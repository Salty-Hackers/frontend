import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const UserContext = React.createContext();
const LoginContext = React.createContext();

export function useLogin() {
  return useContext(LoginContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({ email: "", comments: "", token: "" });

  function login(email, password) {
    return axiosWithAuth()
      .post("/api/auth/login", { email: email, password: password })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <UserContext.Provider value={user}>
      <LoginContext.Provider value={login}>{children}</LoginContext.Provider>
    </UserContext.Provider>
  );
}
