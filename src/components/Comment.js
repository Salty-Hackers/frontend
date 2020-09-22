import React from "react";

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
      User: {comment.user_id}
      <br />
      <br />
      <br />
    </div>
  );
}

export default Comment;
