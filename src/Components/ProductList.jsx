// ProductList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryFilter from './CategoryFilter';
import ProductItem from './ProductItem';
import NoProductsHOC from './NoProductsHoc';

const ProductListContainer = styled.div`
  margin: 20px;
`;

const ProductList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Fruit', 'Shampoo', 'Body Care', 'Food', 'Vegetable'];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <ProductListContainer>
      <CategoryFilter categories={categories} onSelectCategory={setSelectedCategory} />
      <div>
        {filteredProducts.length === 0 ? (
          <h3>No Products Available</h3>
        ) : (
          filteredProducts.map((product) => <ProductItem key={product.id} product={product} />)
        )}
      </div>
    </ProductListContainer>
  );
};

export default NoProductsHOC(ProductList);
