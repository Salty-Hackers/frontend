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
        <h1>Comments Feed</h1>
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
