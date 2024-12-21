// CategoryFilter.js
import React from 'react';
import styled from 'styled-components';

const CategoryButton = styled.button`
  padding: 8px 16px;
  margin: 5px;
  border: none;
  background-color: #7E5CAD;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CategoryFilter = ({ categories, onSelectCategory }) => (
  <div>
    {categories.map((category) => (
      <CategoryButton key={category} onClick={() => onSelectCategory(category)}>
        {category}
      </CategoryButton>
    ))}
  </div>
);

export default CategoryFilter;
