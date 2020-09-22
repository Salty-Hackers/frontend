import React from "react";
import { Link } from "react-router-dom";

function Comment(props) {
  const { comment } = props;
  return (
    <div>
      Comment ID: {comment.id}
      <br />
      Comment: {comment.comment}
      <br />
      Salt Level: {comment.negativity}
      <br />
      User: <Link to={`/user/${comment.user_id}`}>{comment.user_id}</Link>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Comment;
