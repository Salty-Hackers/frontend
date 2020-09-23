//import { axiosWithAuth } from "../utils/axiosWithAuth";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// This card is used to:
// 1. Render the users saves
// 2. Allow the user to delete saved cards

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

    // need to make a axios call to render the users saved cards
    // need to make a delete function to delete saved cards

    // need to add mark-up and some styling
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