import React, { useEffect, useState } from "react";
import Card from "./Card";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";

//  import { axiosWithAuth } from "../utils/axiosWithAuth";
// The dashboard is used to:
// 1. Display the populated Cards
// 2. Provide user with a drop-down list of commenters they can select from in order to see just their comments populated
// 3. Give the user access to their profile with a link in the header
// 4. Allow the user to select Home in order to re-render all cards

function Dashboard() {
  // need to make axios function to populate the drop-down list or maybe change to a search bar instead ???


  return (
    <>
      <div className="dashHeader">
        <div className="profileLink">

          <Link to="/userprofile">Profile</Link>
          <Route path="/userprofile" />

        </div>

        <h1> Saltiest Hacker </h1>
        <h5>
          Find the Hacker News most saltiest comments and save them to your
          profile. Choose to view all comments and pick your favorites, or get
          comments by the user of your choice!
          </h5>
      </div>
      <div className="dropContainer">
        <br />
        <label htmlFor="items">Choose  </label>

        <select className="personsDrop">
          <option value="" disabled></option>
          <option value="person-1">Person 1</option>
          <option value="person-2">Person 2</option>
          <option value="person-3">Person 3</option>
          <option value="person-4">Person 4</option>
        </select>
      </div>
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
