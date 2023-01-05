import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState {
  loading: boolean;
  products: Array<any>;
  fetchStatus: string; 
}

const initialState: InitialState = {
  loading: false,
  products: [],
  fetchStatus: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ rejectWithValue }: any) => {
    try {
      const products = await axios.get("http://localhost:3001/products")

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
      if (!products) { //si no hay productos no guarda el nuevo?
        return {
          ...state,
          products: action.payload,
        };
      }
      else{
        console.log("Los productos ya estan cargados")
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
            fetchStatus: "", 
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
          fetchStatus: "rejected",
        };
      }
    );
    
  },
});

export const { getProducts} = productSlice.actions;

export default productSlice.reducer;
