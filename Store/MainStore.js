import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import CartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    productManager: productReducer,
    cartManager: CartReducer,
  },
});

export default store;
