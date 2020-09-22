import React from "react";

function Comment(props) {
  const { comment } = props;
  return (
    <div>
      Comment ID: {comment.id}
      Comment: {comment.comment}
      Salt Level: {comment.negativity}
      <br />
      <br />
    </div>
  );
}

export default Comment;
