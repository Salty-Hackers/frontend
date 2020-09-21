import React from 'react';

import './App.css';
import { UserProvider } from "./components/contexts/UserContext";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from './components/Forms/Login'
import SignUp from "./components/Forms/SignUp";

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

        <Route path="/signup">
          <SignUp />
        </Route>
      </UserProvider>
    </Router>
  );
}

export default App;
