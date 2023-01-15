import { configureStore } from "@reduxjs/toolkit";

import AuthReducer, { loadUser } from "../slices/AuthSlice";
import cartReducer, { getTotal } from "../slices/CartSlice";
import productsReducer, {
  categoryFetch,
  productsFetch,
} from "../slices/ProductsSlice";
import ordersReducer, { ordersFetch } from "../slices/OrdersSlice";
import UsersSlice, { usersFetch } from "../slices/UsersSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: AuthReducer,
    products: productsReducer,
    orders: ordersReducer,
    users: UsersSlice,
  },
});

store.dispatch(getTotal());
store.dispatch(loadUser(null));
store.dispatch(productsFetch());
store.dispatch(categoryFetch());
store.dispatch(usersFetch());
store.dispatch(ordersFetch());

export type AppDispatch = typeof store.dispatch;
