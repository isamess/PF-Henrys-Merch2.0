import { configureStore } from "@reduxjs/toolkit";

import cartReducer, { getTotal } from "./CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch(getTotal());
