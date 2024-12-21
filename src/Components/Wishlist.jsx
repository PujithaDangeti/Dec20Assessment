// Wishlist.js
import React, { useState } from 'react';
import styled from 'styled-components';

const WishlistContainer = styled.div`
  margin: 20px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const WishlistItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #7E5CAD;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d40000;
  }
`;

const QuantityButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    background-color: #388e3c;
  }
`;

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const existingProduct = prevWishlist.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevWishlist.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevWishlist, { ...product, quantity: 1 }];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setWishlist((prevWishlist) =>
      prevWishlist.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <WishlistContainer>
      <h3>Wishlist</h3>
      {wishlist.map((item) => (
        <WishlistItem key={item.id}>
          <div>
            <p>{item.name}</p>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div>
            <QuantityButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              Increase Quantity
            </QuantityButton>
            <QuantityButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              Decrease Quantity
            </QuantityButton>
            <Button onClick={() => removeFromWishlist(item.id)}>Remove</Button>
          </div>
        </WishlistItem>
      ))}
    </WishlistContainer>
  );
};

export default Wishlist;
