import React from 'react';
import ShopItem from './ShopItem';

const ProductsList = ({ products, onProductClicked }) => {
    return (
        <>
        {products.map((product) => (
            <ShopItem
                key={product.id}
                product={product}
                onProductClicked={onProductClicked}
            />
        ))}
        </>
    );
};

export default ProductsList;
