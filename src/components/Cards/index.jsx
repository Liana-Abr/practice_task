import React from 'react';
import "./style.css";
import Card from "../Card";

const Cards = (props) => {
    return (
        <div className="cards">
            <Card fields={props.fields}/>


        </div>
    );
};

export default Cards;
