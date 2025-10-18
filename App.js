import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <div className="app-container">
      <h1>🛒 Redux Toolkit Shopping Cart</h1>
      <div className="content">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default App;
