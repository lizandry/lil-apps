import React from 'react';
import Product from './Product'
// import PropTypes from 'prop-types'; //NOTE TO SELF this tutorial has some typescript support!


// FIRST STEP create a list of products, using the static-data.js file in src directory

function Cart(props) {

  console.log('cart props check', props)

  return (
    <ul
      className='CartPage-items'
    >
      {/* {props.products.map(product => {
        return <li
          className='Item CartPage-item'
          key={product.id}
          alt={product.name}
          >
          {product.name}
          </li>

      })} */}

    </ul>
  );

}

export default Cart;