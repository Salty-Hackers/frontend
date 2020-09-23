import React, { useEffect, useState } from "react";
import Card from "./Card";

import { useGetSavedCommentContext } from "./contexts/UserContext";



function Dashboard() {
  const [savedComments, setSavedComments] = useState([]);
  const getSavedComments = useGetSavedCommentContext();
  console.log(savedComments);

  useEffect(() => {
    setSavedComments(getSavedComments);
  }, [getSavedComments]);


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
      {savedComments.map((comments) => {
        return <Card key={comments.id} comment={comments} />;
      })}
    </>
  );
}

export default Dashboard;
