import React, { useEffect, useState } from "react";
import Card from "./Card";

<<<<<<< HEAD
//  import { axiosWithAuth } from "../utils/axiosWithAuth";
// The dashboard is used to:
// 1. Display the user saved Cards
// 2. Allow the user to delete the saved Cards
=======
import { useGetSavedCommentContext } from "./contexts/UserContext";
>>>>>>> 21429a2... info added to cards



function Dashboard() {
<<<<<<< HEAD

=======
  const getSavedComments = useGetSavedCommentContext();

  console.log(getSavedComments);
  // need to make axios function to populate the drop-down list or maybe change to a search bar instead ???
>>>>>>> 21429a2... info added to cards


  return (
    <>
      <div className="dashHeader">
<<<<<<< HEAD
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
=======
 

        <h1> Saltiest Hacker </h1>
        <h5>
          Find the Hacker News most saltiest comments and save them to your
          profile. Choose to view all comments and pick your favorites, or get
          comments by the user of your choice!
          </h5>
      </div>
      {getSavedComments.map(comments => {
        return <Card comment={comments} />
      })}
>>>>>>> 21429a2... info added to cards
    </>
  );
}

export default Dashboard;
