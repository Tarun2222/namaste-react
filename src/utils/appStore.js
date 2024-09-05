import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: { // this is one big object thatwhy called as reducer
    cart: cartReducer,
  },
});

export default appStore;
