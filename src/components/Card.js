//import { axiosWithAuth } from "../utils/axiosWithAuth";
import React, { useEffect, useState } from "react";

// The Card is used to:
// 1. Hold the rank, user, and comments from various users
// 2. Give the user the ability to save there favorite comments to their personal profile by selecting the save button

function Card() {

    const [comments, setComments] = useState([]);
    const [user, setUser] = useState([]); // when calling the API, we have to get by email because there is not a 'user'
    const [rank, setRank] = useState([]); // when calling the API, we have to get by negativity because there is not a 'rank'




    // Fetching data for the Rank
    //
    // const getData = () => {
    //   axiosWithAuth()
    //     .get(`api/comments/`)
    //     .then(res => {
    //      setComments(res.data), setRank(res.data)
    //      console.log(response) Comments gives you 'comment' and 'negativity' which will be the rank
    //       })
    //     .catch(error => {
    //       console.log("error")
    //     })
    //              }
    //  Fetching data for the User and the Comments
    //
    // const getData1 = () => {
    // axiosWithAuth()
    //     .get(`api/users/`)
    //     .then(res => {
    //       setUser(res.data)
    //       // console.log(response)  User gives you just users email because comments doesn't display it. So, email = user
    //       })
    //     .catch(error => {
    //       console.log("error")
    //     })
    //          }
    //
    // Below we are posting the users favorite comments to the API
    //
    // const saveComment = event => {
    //     event.preventDefault();
    //     axiosWithAuth()
    //         .post('/comments/saves', {
    //             id: 'currentUser',  // setting id as 'currentUser' so we have a way of pulling this data again from this specific user 
    //             //and rendering to userProfile. I think we will have user set up in the userContext. The dummy data user id's are currently set to numbers,
    //             // so we need to check to see if putting in a string will work correctly. Below I saved each card item the way its named
    //             // in the API
    //             email: user,
    //             negativity: rank,
    //             comments: comments

    //         })
    //         .then(res => console.log(res.data)
    //         )
    // }
    // Below, we need a way to get duplicate this same return statement, in UserProfile... so it can be used  once we get the users saves, and 
    // be displayed in that component.  And we need to add a key so console won't yell at us :) Also need to add saveComment to the
    // button onclick. Can't do that until axios call are ready
    //
    // Below we are rendering the data we got back from the API and mapping over it to fill out our cards
    //
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
            <button className="cardButton" onClick >save </button>
        </div>


    )
}

export default Card;