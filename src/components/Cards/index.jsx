import React from 'react';
import "./style.css";
import Card from "../Card";
import fields from "../../data.json";

const Cards = ({data}) => {
    return (
        <div className="cards">
            <Card data={fields} />


        </div>
    );
};

export default Cards;
