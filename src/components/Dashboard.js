import React, { useEffect, useState } from "react";
import Card from "./Card";

import { useGetSavedCommentContext } from "./contexts/UserContext";



function Dashboard() {
  const getSavedComments = useGetSavedCommentContext();

  console.log(getSavedComments);
  // need to make axios function to populate the drop-down list or maybe change to a search bar instead ???


  return (
    <>
      <div className="dashHeader">
 

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
    </>
  );
}

export default Dashboard;
