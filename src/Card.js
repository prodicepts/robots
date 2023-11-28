import React from "react";
import './css/Card.css'

const Card = (x) => {
    const { name, username, email } = x;
    // console.log(color)
    return (
        <div className={`bg-light-blue card-container  br4 dib grow m4 tw shadow-2 `}>
            <p className="f3 b">{username}</p>
            <img src={`https://robohash.org/${username}?size=100x100`} alt="hasjsh" />
            <div>
                <p className="f4">{name}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;