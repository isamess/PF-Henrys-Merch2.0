import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { setHeaders, url } from "./api";

type InitialState = {
  items: Array<any>;
  status: any;
  createStatus: any;
};

const initialState: InitialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const productsCreate: any = createAsyncThunk(
  "products/productsCreate",
  async (values: any) => {
    try {
      const response = await axios.post(
        `${url}/products`,
        values,
        setHeaders()
      );
      return response.data;
    } catch (err: any) {
      console.log(err);
      toast.error(err.response?.data);
    }
  }
);
export const productsFetch: any = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/products");
      return response.data;
    } catch (err: any) {
      console.log(err);
      toast.error(err.response?.data);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsCreate.pending]: (state, action: PayloadAction<any>) => {
      state.createStatus = "pending";
    },
    [productsCreate.fullfiled]: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload);
      state.createStatus = "success";
    },
    [productsCreate.rejected]: (state, action: PayloadAction<any>) => {
      state.createStatus = "rejected";
    },
  },
});
