import React from "react";
import { Link } from "react-router-dom";
import { useSaveComments } from "./contexts/UserContext";


function Comment(props) {
  const { comment } = props;
  const saveComment = useSaveComments();

  const handleClick = (e) => {
    saveComment(comment);
  };

  return (
    <>
      Comment ID: {comment.id}
      <br />
      Comment: {comment.comment}
      <br />
      Salt Level: {comment.negativity_score}
      <br />
      User: <Link to={`/user/${comment.user_id}`}>{comment.user_id}</Link>
      <br />
      <button className="cardButton" onClick={handleClick}>
        Save
      </button>
      
      <br/><br/>
      <a
        className="twitter-share-button"
        href={`https://twitter.com/intent/tweet?text=${comment.comment}`}
      >
        Tweet
      </a>
      <hr />
      <br />
    </>
  );
}

export default Comment;
