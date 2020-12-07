import React from 'react';
import ProductList from './ProductList'

// a navigation bar will allow the user to toggle between products and cart tabs

const Nav = (props) => (
  <nav className="App-nav">
    <ul>
    <ProductList 
        products={props.products}
      />
    </ul>
  </nav>
);

export default Nav;
