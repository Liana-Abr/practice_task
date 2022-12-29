import React from 'react';
import "./style.css";
import Cards from "../../components/Cards";
import Filter from "../../components/Filter";

function Home (props) {
    return (
        <div className="container">
            <h1>Товары</h1>
            <Filter/>
            <Cards data={props.data}/>
        </div>
    );
};

export default Home;
