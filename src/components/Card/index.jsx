import React from 'react';
import "./style.css";

const Card = ({data}) => {

    return (
        <>
            {data.map(el =>(
                <div className="card" key={el.id}>
                    <ul >
                        <li>
                           <strong>Дата парсинга </strong> {el.parseDate},
                            <strong>Название</strong> {el.name},
                            <strong>Описание</strong> {el.description},
                            <strong>Цена</strong> {el.price},
                            <strong>Продавец</strong>  {el.seller},
                            <strong>Рейтинг продавца</strong> {el.sellerRating},
                            <strong>Дата доставки</strong>{el.deliveryDate},
                            <strong>Количество отзывов</strong> {el.numOfReviews},
                            <strong>Рейтинг товара</strong> {el.itemRating}


                        </li>
                    </ul>
                </div>
            ))}
        {/*<div className="card">*/}
        {/*    <ul>*/}
        {/*        {data.map(el =>(*/}
        {/*            <li key={el.id}>*/}
        {/*                <strong>{el.text}:</strong>*/}
        {/*                {el.data}*/}
        {/*            </li>*/}

        {/*        ))}*/}
        {/*    </ul>*/}
        {/*</div>*/}
        </>
    );
};

export default Card;
