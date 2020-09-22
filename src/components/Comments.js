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
      <h1>Comments Feed</h1>

      {getComments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default Comments;
