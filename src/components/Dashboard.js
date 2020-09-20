import React from "react";
import Card from "./Card";

function Dashboard() {
    return (
      <>
        <div className="dashHeader">
          <div className="profileLink"> Profile</div>
          <h1> Saltiest Hacker </h1>
          <h5>
            Find the Hacker News most saltiest comments and save them to your
            profile. Choose to view all comments and pick your favorites, or get
            comments by the user of your choice!
          </h5>
        </div>
        <div className="dropContainer">
          <br />
          <label htmlFor="items">Choose a Commenter </label>

          <select className="personsDrop">
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
