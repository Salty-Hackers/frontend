import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./App.css";

import "./App.css";
import Login from "./components/Forms/Login.js";
import SignUp from "./components/Forms/SignUp.js";
import { UserProvider } from "./components/contexts/UserContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </nav>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </UserProvider>
  );
}

export default App;