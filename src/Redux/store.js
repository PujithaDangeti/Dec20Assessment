import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; // Adjust path if productSlice is elsewhere

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
