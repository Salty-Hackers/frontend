import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useComments } from "./contexts/UserContext";

function UserProfile() {
    let { id } = useParams();

    const [comment, setComment] = useState([]);
    const getComments = useComments();

    useEffect(() => {
        setComment(getComments);
    }, [getComments]);

    const result = comment.filter((com) => com.user_id == id);
    console.log(result);


    return (
      <>
        <h1>User ID {id}</h1>

        <h5>User Comments</h5>
        {result.map((person) => (
          <div>
            <p> Comment: {person.comment} </p><br/>
            <p> Salt Level: {person.negativity_score} </p><br/>
          </div>
        ))}
        <br  />
      </>
    );
}

export default UserProfile;