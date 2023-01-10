import { configureStore } from "@reduxjs/toolkit";

import AuthReducer, { loadUser } from "../slices/AuthSlice";
import cartReducer, { getTotal } from "../slices/CartSlice";
import productsReducer from "../slices/ProductsSlice";
import ordersReducer from "../slices/OrdersSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: AuthReducer,
    products: productsReducer,
    orders: ordersReducer,
  },
});

store.dispatch(getTotal());
store.dispatch(loadUser(null));

export type AppDispatch = typeof store.dispatch;
