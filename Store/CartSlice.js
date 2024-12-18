import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cartManager",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseByQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemInCart = state.cart.find((item) => item.id === id);
      if (itemInCart) {
        itemInCart.quantity += quantity;
      }
    },
    decreaseByQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemInCart = state.cart.find((item) => item.id === id);
      if (itemInCart) {
        if (itemInCart.quantity - quantity == 0) {
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          itemInCart.quantity -= quantity;
        }
      }
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseByQuantity,
  decreaseByQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
