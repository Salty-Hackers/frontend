import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./App.css";
import "./components/Forms/Login.js";
import "./components/Forms/SignUp.js";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Route path="/login"></Route>
        <Route path="/signup"></Route>
      </nav>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
