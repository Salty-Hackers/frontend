
import React, { useEffect, useState } from "react";

<<<<<<< HEAD

=======
function Card(props) {
    const {comment} = props
>>>>>>> 21429a2... info added to cards
    return (
        <div className="card" >
            <h3 className="cardTitles">Comment: </h3> <br />
            {comment.comment}<br /><br/>

<<<<<<< HEAD
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
=======
            <h3 className="cardTitles">User: </h3> 
            {comment.user_id}
>>>>>>> 21429a2... info added to cards
        </div>


    )
}

export default Card;