import React, { useState } from 'react';
import ProductsContainer from './containers/ProductsContainer';
import BasketList from './components/BasketList';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

function App() {
  const [basketItems, setBasketItems] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);

  const handleProductClicked = (product) => {
    setBasketItems([...basketItems, product]);
    setBasketTotal(basketTotal + product.price);
  };

  return (
    <Router>
      <div className="App">
            <h1> Melon Shop</h1>
            <hr></hr>
        <ProductsContainer onProductClicked={handleProductClicked} />
        <div className='basket'>
          <h3> Sub-Total: </h3>
          <p className='total'>£{basketTotal}</p>
            <Link to="/basket_list"> Basket &#40;{basketItems.length}&#41;</Link>
            
            
        
        <Routes>
          <Route
            path="/basket_list"
            element={<BasketList basketItems={basketItems} basketTotal={basketTotal} />}
          />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


