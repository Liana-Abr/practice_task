import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "../Home";
import "./style.css";

const Main = (props) => {
    return (
            <Routes>
                    <Route path="/" element={<Home data={props.data}/>}/>
            </Routes>
    );
};

export default Main;
