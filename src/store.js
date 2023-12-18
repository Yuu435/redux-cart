import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, cartReducer } from "./features/counterSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
