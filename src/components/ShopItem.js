import React, { useState } from 'react';

const ShopItem = ({ product, onProductClicked }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);

  const handleClick = () => {
    onProductClicked(product);
    setBasketItems([...basketItems, product.name]);
    setBasketTotal(basketTotal + product.price);
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <p><strong>Price: </strong>£{product.price}</p>
      <p><strong>Category: </strong>{product.category}</p>
      <p> {product.image} </p>
      <button onClick={handleClick}>Add to Cart</button>
      <hr />
    </div>
  );
};

export default ShopItem;
