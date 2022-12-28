import React from 'react';
import "./style.css";
import Cards from "../../components/Cards";
import fields from "../../data.json"

function Home (props) {
    return (
        <div className="container">
            <h1>Товары</h1>
            <Cards data={props.items}  />
            {/*<ul>*/}
            {/*    {props.fields.map(el =>(*/}
            {/*        <li>*/}
            {/*            <strong>{el.text}</strong>*/}
            {/*            <strong>{el.data}</strong>*/}
            {/*        </li>*/}

            {/*    ))}*/}
            {/*</ul>*/}

        </div>
    );
};

export default Home;
