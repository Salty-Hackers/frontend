import React from "react";

function Card(props) {
  const { comment } = props;
  return (
    <div className="card">
      <h3 className="cardTitles">Comment: </h3> <br />
      {comment.comment}
      <br />
      <br />
      <h3 className="cardTitles">User: </h3>
      {comment.user_id}
      <br />
      <button className="cardButton" onClick>
        delete
      </button>
    </div>
  );
}

export default Card;
