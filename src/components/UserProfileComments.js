import React from "react";

function UserProfileComments(props) {
  const { person } = props;
  return (
    <div className="userComments">
      Comment: {person.comment} <br />
      Salt Level: {person.negativity_score}
      <br />
    </div>
  );
}

export default UserProfileComments;
