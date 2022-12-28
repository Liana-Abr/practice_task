import React from 'react';
import {Link} from "react-router-dom";
import "./style.css";
const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">WB <span>парсер</span></Link>

        </header>
    );
};

export default Header;
