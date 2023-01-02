import { configureStore } from "@reduxjs/toolkit";

import AuthReducer, { loadUser } from "../slices/AuthSlice";
import cartReducer, { getTotal } from "../slices/CartSlice";
import { registerUser } from "../slices/AuthSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: AuthReducer,
  },
});

store.dispatch(getTotal());
store.dispatch(loadUser(null));

export type AppDispatch = typeof store.dispatch;
