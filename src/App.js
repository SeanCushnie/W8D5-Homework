import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProductsContainer from './containers/ProductsContainer';

function App() {
  return (
    <div className="App">
      <h1> Melon Shop</h1>
      <ProductsContainer/>
    </div>
  );
}

export default App;

