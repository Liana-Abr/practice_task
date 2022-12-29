import React from 'react';
import "./style.css";

const Card = (props) => {
    return (
        <div className="cards">
            {props.data.map((product) => (
                <a href='/' className="card" key={product.id}>
                    <img className="card-img" src={`https://basket-10.wb.ru/vol${product.id.toString().substring(0, 4)}/part${product.id.toString().substring(0, 6)}/${product.id}/images/c516x688/1.jpg`} alt="Изображение не найдено"/>

                    <h3>{product.brand}</h3>
                    <p>{product.name}</p>
                    {product.sale > 0 ? <div className="card-price-sale">SALE -{product.sale}%</div> : <p className="card-lastpr"></p>}
                    <div className="card-price-container">
                        {product.salePriceU !== product.priceU
                            ? <>
                                <p className="card-old-price">{product.salePriceU.toString().substring(0, product.salePriceU.toString().length - 2)} &#8381;</p>
                                <span className="card-new-price">{product.priceU.toString().substring(0, product.salePriceU.toString().length - 2)} &#8381;</span>
                            </>
                            : <p className="card-price">{product.priceU.toString().substring(0, product.salePriceU.toString().length - 2)} &#8381;</p>
                        }
                    </div>

                </a>

            ))}



        </div>
    );
};

export default Card;