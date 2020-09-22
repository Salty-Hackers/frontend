//import { axiosWithAuth } from "../utils/axiosWithAuth";
import React from "react";
import { useParams } from "react-router-dom";
// This card is used to:
// 1. Render the users saves
// 2. Allow the user to delete saved cards

import { useComments } from "./contexts/UserContext";

function UserProfile() {
    let { id } = useParams();
    const getComments = useComments();
    const userComments = getComments.filter(commentId => commentId === id)


    // need to make a axios call to render the users saved cards
    // need to make a delete function to delete saved cards

    // need to add mark-up and some styling
    return (
        <>
            <h1> Welcome to your Favorite Comments </h1>
            <h5> Here you can view and delete comment cards </h5>
            <p>User ID {id}</p>
            {userComments.map(person =>
                <p> {person.id} </p>)}
        </>
    )

}

export default UserProfile;