import React from "react";

import "./App.css";
import { UserProvider } from "./components/contexts/UserContext";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Forms/Login";

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <h1>Saltiest Hacker</h1>
        </div>

        <Route path="/login">
          <Login />
        </Route>
      </UserProvider>
    </Router>
  );
}

export default App;
