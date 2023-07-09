import React from 'react';

const BasketList = ({ basketItems, basketTotal }) => {
    return (
        <div>
            <h2>Basket</h2>
            {basketItems.length === 0 ? (
                <p>Empty</p>) 
                : (
                    <ul>{basketItems.map((item, index) => (
                        <li key={index}>{item}</li>))}
                    </ul>)}
                    <p>Total: £{basketTotal}</p>
        </div>
);
};

export default BasketList;


