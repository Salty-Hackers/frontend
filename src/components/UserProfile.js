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
            <h1> Welcome to your Favorite Comments </h1>
            <h5> Here you can view and delete comment cards </h5>
            <p>User ID {id}</p>
            {result.map(person =>
                <div key >
                    <p> {person.comment} </p>
                    <p> {person.negativity} </p>
                </div>)}
        </>
    );
}

export default UserProfile;