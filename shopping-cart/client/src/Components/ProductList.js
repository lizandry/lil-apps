import React from 'react';
import Product from './Product'
// import PropTypes from 'prop-types'; //NOTE TO SELF this tutorial has some typescript support!


// FIRST STEP create a list of products, using the static-data.js file in src directory

function ProductList(props) {
console.log('products in list', props)

//   let products = props.map(product => {
//     return <li>product.name</li>

//   })

  return (
    <ul>
      {props.products.map(product => {
        return <li
          className='ItemPage-items'
          key={product.id}
          alt={product.name}
          >
          {product.name}
          </li>

      })}

    </ul>
  );

}

export default ProductList;