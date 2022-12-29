import React from 'react';
import "./style.css";
import Cards from "../../components/Cards";

function Home () {
    return (
        <div className="container">
            <h1>Товары</h1>
            <Cards />
        </div>
    );
};

export default Home;
