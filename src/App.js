import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
