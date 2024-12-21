// ProductItem.js
import React from 'react';
import styled from 'styled-components';

const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => (theme === 'dark' ? '#333' : '#fff')};
`;

const ProductItem = ({ product }) => (
  <ProductCard>
    <h3>{product.name}</h3>
    <p>Price: ₹{product.price}</p>
  </ProductCard>
);

export default ProductItem;
