import React from "react";
import { useDeleteSavedComment } from "./contexts/UserContext";
function Card(props) {
  const { comment } = props;
  const deleteComment = useDeleteSavedComment();

  const handleClick = () => {
    deleteComment(comment);
  };

  return (
    <div className="card">
      <h3 className="cardTitles">Comment: </h3> <br />
      {comment.comment}
      <br />
      <br />
      <h3 className="cardTitles">User: </h3>
      {comment.user_id}
      <br />
      <button className="cardButton" onClick={handleClick}>
        delete
      </button>
    </div>
  );
}

export default Card;
