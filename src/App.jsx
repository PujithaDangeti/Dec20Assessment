// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Redux/productSlice';
import ProductList from './Components/ProductList';
import ProductSearch from './Components/ProductSearch';
import Wishlist from './Components/Wishlist';

const App = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = (query) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    // Handle search result, could be stored in the state if needed.
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ProductSearch onSearch={handleSearch} />
      <ProductList products={products} />
      <Wishlist />
    </div>
  );
};

export default App;
