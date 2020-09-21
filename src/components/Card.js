import React from "react";

function Card() {


    return (
        <div className="card">
            <h3 className="cardTitles">Rank: </h3>
            <p className="cardData"> Rank here</p>
            <br />
            <h3 className="cardTitles">User: </h3>
            <p className="cardData"> User here </p>
            <br />
            <h3 className="cardTitles">Score: </h3>
            <p className="cardData">Score here </p>
            <br />
            <h3 className="cardTitles">Saltiest Comment: </h3>
            <p className="cardData" id="commentText">
                Comment here. The card will grow to whatever size the comment is.
                Instead of making the height fixed. We won't have a ton of blank
                space.
            </p>
            <br />
            <button className="cardButton">state</button>
        </div>


    )
}

export default Card;