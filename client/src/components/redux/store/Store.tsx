import { configureStore } from "@reduxjs/toolkit";

import AuthReducer, { loadUser } from "../Slices/AuthSlice";
import cartReducer, { getTotal } from "../Slices/CartSlice";
import { registerUser } from "../Slices/AuthSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: AuthReducer,
  },
});

store.dispatch(getTotal());
store.dispatch(loadUser(null));

export type AppDispatch = typeof store.dispatch;
