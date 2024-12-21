// NoProductsHOC.js
import React from 'react';

const NoProductsHOC = (Component) => {
  return ({ products, ...props }) => {
    if (!products || products.length === 0) {
      return <h3>No Products Available. Search for any fruits then categories will be available</h3>;
     
    }
    return <Component products={products} {...props} />;
  };
};

export default NoProductsHOC;
