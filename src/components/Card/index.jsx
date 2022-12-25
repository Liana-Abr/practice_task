import React from 'react';
import "./style.css";

const Card = (props) => {

    return (
        <>
        <div className="card">
            <ul>
                {props.fields.map(el =>(
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
