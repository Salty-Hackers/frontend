import React, { useEffect, useState } from "react";
import Card from "./Card";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";

//  import { axiosWithAuth } from "../utils/axiosWithAuth";
// The dashboard is used to:
// 1. Display the user saved Cards
// 2. Allow the user to delete the saved Cards



function Dashboard() {



  return (
    <>
      <div className="dashHeader">
        <div className="profileLink">

          <Link to="/comments">All Comments</Link>
          <Route path="/comments" />

        </div>


      </div>
      <UserProfile />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default Dashboard;
