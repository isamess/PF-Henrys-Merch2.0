import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { setHeaders, url } from "./api";

type InitialState = {
  items: Array<any>;
  categories: Array<any>;
  status: "" | null;
  createStatus: any;
  products: Array<any>;
  productsStatus: "" | null;
  categoryStatus: any;
};

const initialState: InitialState = {
  items: [],
  categories: [],
  status: null,
  createStatus: null,
  products: [],
  productsStatus: null,
  categoryStatus: null,
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

export const categoryCreate: any = createAsyncThunk(
  "category/categoryCreate",
  async (values: any) => {
    try {
      const response = await axios.post(
        `${url}/products/category`,
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
      const response = await axios.get(`${url}/products/find`);
      return response.data;
    } catch (err: any) {
      console.log(err);
      toast.error(err);
    }
  }
);

export const categoryFetch: any = createAsyncThunk(
  "category/categoryFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/products/category/find`);
      return response.data;
    } catch (err: any) {
      console.log(err);
      toast.error(err);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [categoryCreate.pending]: (state, action: PayloadAction<any>) => {
      state.categoryStatus = "pending";
    },
    [categoryCreate.fullfiled]: (state, action: PayloadAction<any>) => {
      state.categories.push(action.payload);
      state.categoryStatus = "success";
    },
    [categoryCreate.rejected]: (state, action: PayloadAction<any>) => {
      state.categoryStatus = "rejected";
    },
    [categoryFetch.pending]: (state: any, action: PayloadAction) => {
      state.categoryStatus = "pending";
    },
    [categoryFetch.fulfilled]: (state: any, action: PayloadAction) => {
      state.categories = action.payload;
      state.categoryStatus = "success";
    },
    [categoryFetch.rejected]: (state: any, action: PayloadAction) => {
      state.categoryStatus = "rejected";
    },
    [productsFetch.pending]: (state: any, action: PayloadAction) => {
      state.productsStatus = "pending";
    },
    [productsFetch.fulfilled]: (state: any, action: PayloadAction) => {
      state.products = action.payload;
      state.productsStatus = "success";
    },
    [productsFetch.rejected]: (state: any, action: PayloadAction) => {
      state.productsStatus = "rejected";
    },
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

export default productsSlice.reducer;
