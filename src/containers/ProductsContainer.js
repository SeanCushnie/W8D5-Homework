import React, { useState } from "react";
import ShopItem from "../components/ShopItem";
import ProductsList from "../components/ProductsList";
import BasketList from "../components/BasketList";

const ProductsContainer = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);

  const products = [
    { id: 1, title: 'Purple Melon', price: 5.00, category: 'Melon' },
    { id: 2, title: 'Yellow Melon', price: 2.99, category: 'Melon' },
    { id: 3, title: 'Watermelon', price: 4.99, category: 'Melon' },
  ];

  const onProductClicked = (product) => {
    setBasketItems([...basketItems, product.title]);
    setBasketTotal(basketTotal + product.price);
  };

  return (
    <div className="main-container">
      <ProductsList products={products} onProductClicked={onProductClicked} />
      <BasketList basketItems={basketItems} basketTotal={basketTotal} />
    </div>
  );
};

export default ProductsContainer;


