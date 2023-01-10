import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";

type InitialState = {
  list: Array<any>;
  status: "" | null;
};

const initialState: InitialState = {
  list: [],
  status: null,
};

export const ordersFetch: any = createAsyncThunk(
  "orders/ordersFetch",
  async () => {
    try {
      const response: any = await axios.get(`${url}/orders`, setHeaders());

      return response.data;
    } catch (err: any) {
      console.log(err);
    }
  }
);

export const ordersEdit: any = createAsyncThunk(
  "orders/ordersEdit",
  async (values: any, { getState }) => {
    const state: any = getState();

    let currentOrder = state.orders.list.filter(
      (order: any) => order._id === values.id
    );

    const newOrder: any = {
      ...currentOrder[0],
      delivery_status: values.delivery_status,
    };

    try {
      const response: any = await axios.put(
        `${url}/orders/${values.id}`,
        newOrder,
        setHeaders()
      );

      return response.data;
    } catch (err: any) {
      console.log(err);
    }
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [ordersFetch.pending]: (state: any, action: PayloadAction) => {
      state.status = "pending";
    },
    [ordersFetch.fulfilled]: (state: any, action: PayloadAction) => {
      state.list = action.payload;
      state.status = "success";
    },
    [ordersFetch.rejected]: (state: any, action: PayloadAction) => {
      state.status = "rejected";
    },
    [ordersEdit.pending]: (state: any, action: PayloadAction) => {
      state.status = "pending";
    },
    [ordersEdit.fulfilled]: (state: any, action: any) => {
      const updatedOrder: any = state.list.map((order: any) =>
        order._id === action.payload._id ? action.payload : order
      );
      state.listen = updatedOrder;
      state.status = "success";
    },
    [ordersEdit.rejected]: (state: any, action: PayloadAction) => {
      state.status = "rejected";
    },
  },
});

export default ordersSlice.reducer;
