import React, { useEffect, useState } from "react";
import { useComments } from "./contexts/UserContext";
import Comment from "./Comment";
function Comments() {
  const getComments = useComments();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(getComments);
  }, [getComments]);

  return (
    <div>
      <div className="commentHeader">
        <h1>Comments Feed</h1>
      </div>

      <div className="commentContainer">
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
}

export default Comments;
