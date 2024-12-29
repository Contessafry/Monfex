import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/Cart/cart.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice.reducer,
    },
  });
};
