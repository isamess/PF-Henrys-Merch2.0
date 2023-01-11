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
  deleteStatus: any;
  editStatus: any;
};

const initialState: InitialState = {
  items: [],
  categories: [],
  status: null,
  createStatus: null,
  products: [],
  productsStatus: null,
  categoryStatus: null,
  deleteStatus: null,
  editStatus: null,
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

export const productsEdit: any = createAsyncThunk(
  "products/productsEdit",
  async (values: any) => {
    try {
      const response = await axios.put(
        `${url}/products/${values.product._id}`,
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

export const productDelete: any = createAsyncThunk(
  "products/productsDelete",
  async (id: any) => {
    try {
      const response = await axios.delete(
        `${url}/products/delete/${id}`,
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
    [categoryCreate.fulfilled]: (state, action: PayloadAction<any>) => {
      state.categories.push(action.payload);
      state.categoryStatus = "success";
      toast.success("Se ha creado la categoria");
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
    [productsCreate.fulfilled]: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Se ha creado el producto");
    },
    [productsEdit.pending]: (state, action: PayloadAction<any>) => {
      state.editStatus = "pending";
    },
    [productsEdit.fulfilled]: (state, action: PayloadAction<any>) => {
      const updatedProducts = state.items.map((product: any) =>
        product._id === action.payload ? action.payload : product
      );

      state.items = updatedProducts;
      state.editStatus = "success";
      toast.info("Se ha atualizado el producto");
    },
    [productsEdit.rejected]: (state, action: PayloadAction<any>) => {
      state.editStatus = "rejected";
    },
    [productDelete.pending]: (state, action: PayloadAction<any>) => {
      state.deleteStatus = "pending";
    },
    [productDelete.fulfilled]: (state, action: PayloadAction<any>) => {
      const newList = state.items.filter(
        (item: any) => item._id !== action.payload
      );

      state.items = newList;
      state.deleteStatus = "success";
      toast.error("Se ha eliminado el producto");
    },
    [productDelete.rejected]: (state, action: PayloadAction<any>) => {
      state.deleteStatus = "rejected";
    },
  },
});

export default productsSlice.reducer;
