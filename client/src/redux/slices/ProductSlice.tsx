import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState {
  loading: boolean;
  products: any;
  error: string;
}

const initialState: InitialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (values: string | any, { rejectWithValue }: any) => {
    try {
      const products = await axios
        .get("http://localhost:3001/products")
        .then((response) => response.data);

      return products;
    } catch (err: any) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts(state, action: PayloadAction<any>) {
      const products = state.products;
      if (products) {
        return {
          ...state,
          products: action.payload,
        };
      }
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(
      fetchProducts.pending,
      (state: any, action: PayloadAction<any>) => {
        return { ...state, loading: true };
      }
    );
    builder.addCase(
      fetchProducts.fulfilled,
      (state: any, action: PayloadAction<any>) => {
        if (action.payload) {
          return {
            ...state,
            loading: false,
            products: action.payload,
            error: "",
          };
        } else {
          return state;
        }
      }
    );
    builder.addCase(
      fetchProducts.rejected,
      (state: any, action: PayloadAction<any>) => {
        return {
          ...state,
          loading: false,
          products: [],
          error: "rejected",
        };
      }
    );
    
  },
});

export const { getProducts} = productSlice.actions;

export default productSlice.reducer;
