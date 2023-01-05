import { configureStore } from "@reduxjs/toolkit";
import { products } from "../../data/products";

import AuthReducer, { loadUser } from "../slices/AuthSlice";
import cartReducer, { getTotal } from "../slices/CartSlice";
import productReducer, { getProducts } from "../slices/ProductSlice"
// import { registerUser } from "../slices/AuthSlice"; no esta en uso

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: AuthReducer,
    products: productReducer,
  },
});

store.dispatch(getTotal());
store.dispatch(getProducts(products));
store.dispatch(loadUser(null));

export type AppDispatch = typeof store.dispatch;
