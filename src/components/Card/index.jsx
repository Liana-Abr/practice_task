import React from 'react';
import "./style.css";

const Card = () => {
    return (
        <div className="card">
            <ul>
                <li>Дата парсинга</li>
                <li>Название</li>
                <li>Описание</li>
                <li>Цена</li>
                <li>Продавец</li>
                <li>Рейтинг продавца</li>
                <li>Дата доставки</li>
                <li>Количество отзывов</li>
                <li>Рейтинг товара</li>
            </ul>
        </div>
    );
};

export default Card;
