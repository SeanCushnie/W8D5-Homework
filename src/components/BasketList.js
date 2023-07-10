import React from 'react';
import './BasketList.css'

const BasketList = ({ basketItems, basketTotal }) => {
    return (
        <div>
            <h2>Basket</h2>
            {basketItems.length === 0 ? (
                <p>Empty</p>
            ) : (
                <>
                    <ul>
                        {basketItems.map((item, index) => (
                            <li key={index}>{item.title} : £{item.price}</li>
                        ))}
                    </ul>
                    {/* <h3><b> <u>Total: £{basketTotal}</u></b></h3> */}
                </>
            )}
        </div>
    );
};

export default BasketList;




