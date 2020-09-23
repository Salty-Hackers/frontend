//import { axiosWithAuth } from "../utils/axiosWithAuth";
import React, { useEffect, useState } from "react";

// The Card is used to:
// 1. Hold the rank, user, and comments from various users
// 2. Give the user the ability to save there favorite comments to their personal profile by selecting the save button

function Card() {

    const [comments, setComments] = useState([]);
    const [user, setUser] = useState([]); // when calling the API, we have to get by email because there is not a 'user'
    const [rank, setRank] = useState([]); // when calling the API, we have to get by negativity because there is not a 'rank'



    return (
        <div className="card" >

            <h3 className="cardTitles">Rank: </h3>
            {rank.filter(rankers =>
                <p className="cardData"> {rankers.negativity}</p>)}
            <br />
            <h3 className="cardTitles">User: </h3>
            {user.map(person =>
                <p className="cardData"> {person.email} </p>)}
            <br />
            <h3 className="cardTitles">Saltiest Comment: </h3>
            {comments.filter(comment =>
                <p className="cardData" id="commentText">
                    {comment.comments}
                </p>)}
            <br />
            <button className="cardButton" onClick >delete </button>
        </div>


    )
}

export default Card;