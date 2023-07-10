import React from "react";
import ShopItem from "../components/ShopItem";
import ProductsList from "../components/ProductsList";

const ProductsContainer = ({ onProductClicked }) => {
    const products = [
        { id: 1, title: 'Purple Melon', price: 5.00, category: 'Melon' },
        { id: 2, title: 'Yellow Melon', price: 2.99, category: 'Melon' },
        { id: 3, title: 'Watermelon', price: 4.99, category: 'Melon' },
    ];

    return (
        <div className="main-container">
            <ProductsList products={products} onProductClicked={onProductClicked} />
        </div>
    );
};

export default ProductsContainer;



