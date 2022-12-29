import React from 'react';
import "./style.css";
import Card from "../Card";


const Cards = (props) => {
    return (
        <div className="cards">
          <Card data={props.data}/>
        </div>
    );
};

export default Cards;
