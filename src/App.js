import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./App.css";

import "./App.css";
import Login from "./components/Forms/Login.js";
import SignUp from "./components/Forms/SignUp.js";
import { UserProvider } from "./components/contexts/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import Comments from "./components/Comments";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <UserProvider>
      <div className="App">

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>

        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/comments" component={Comments} />
          <PrivateRoute exact path="/user/:id" component={UserProfile} />
        </Switch>
      </div>
    </UserProvider>
  );
}

export default App;