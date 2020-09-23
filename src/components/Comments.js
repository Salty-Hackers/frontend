import React, { useEffect } from "react";
import { useComments } from "./contexts/UserContext";
import Comment from "./Comment";
function Comments() {
  const getComments = useComments();

  return (
    <div>
<<<<<<< HEAD

      <div className='commentHeader'>
        <h1> Saltiest Hacker </h1>
        <h5>
          Find the Hacker News most saltiest comments in the comment feed below and save them to your
          profile, or get comments by the user of your choice just by clicking on that Users Id!
          </h5>
=======
      <div className="commentHeader">
        <h1>Comments Feed</h1>
>>>>>>> 21429a2... info added to cards
      </div>
      <div className="commentContainer">
        {getComments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
}

export default Comments;
