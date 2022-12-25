import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "../Home";
import Admin from "../Admin";
import "./style.css";

const Main = (props) => {
    return (
            <Routes>
                    <Route path="/" element={<Home  />}/>
                    <Route path="/admin" element={<Admin />}/>
            </Routes>
    );
};

export default Main;
