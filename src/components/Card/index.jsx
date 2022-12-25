import React from 'react';
import "./style.css";

const Card = ({data}) => {

    return (
        <>
        <div className="card">
            <ul>
                {data.map(el =>(
                    <li key={el.id}>
                        <strong>{el.text}:</strong>
                        {el.data}
                    </li>

                ))}
            </ul>
        </div>
        </>
    );
};

export default Card;
