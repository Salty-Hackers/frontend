import React from "react";
import { Link } from "react-router-dom";

function Comment(props) {
  const { comment } = props;
  return (
    <>
      Comment ID: {comment.id}
      <br />
      Comment: {comment.comment}
      <br />
      Salt Level: {comment.negativity_score}
      <br />
      User: <Link to={`/user/${comment.user_id}`}>{comment.user_id}</Link>
      <hr />
      <br />
    </>
  );
}

export default Comment;
