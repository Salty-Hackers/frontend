import React, { useEffect } from "react";
import { useComments } from "./contexts/UserContext";
import Comment from "./Comment";
function Comments() {
  const getComments = useComments();

  useEffect(() => {
    console.log(getComments);
  }, [getComments]);

  return (
    <div>

      <div className='commentHeader'>
        <h1> Saltiest Hacker </h1>
        <h5>
          Find the Hacker News most saltiest comments in the comment feed below and save them to your
          profile, or get comments by the user of your choice just by clicking on that Users Id!
          </h5>
      </div>
      <div className='commentContainer'>
        {getComments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}

      </div>
    </div>
  );
}

export default Comments;
