import React from "react";
import './css/CardLists.css';
import Card from "./Card";

const CardLists = ({rbt}) => {
    const CardComponents = rbt.map((user, i) => {
                                return (
                                    <Card 
                                    key={i} 
                                    name={user.name} 
                                    email={user.email} 
                                    username={user.username}
                                    color = {user.color}
                                    />)
                            });
    return (
        <div className="cardlist tc">
            {
                CardComponents
            }
        </div>
    );
}


export default CardLists;