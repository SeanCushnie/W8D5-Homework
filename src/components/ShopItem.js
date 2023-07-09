import React from 'react';

const ShopItem = ({ product, onProductClicked }) => {
  const handleClick = () => {
    onProductClicked(product);
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <p><strong>Price: </strong>£{product.price}</p>
      <p><strong>Category: </strong>{product.category}</p>
      <button onClick={handleClick}>Add to Cart</button>
      <hr></hr>
    </div>
  );
};

export default ShopItem;