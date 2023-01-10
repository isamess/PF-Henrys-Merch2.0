import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { url, setHeaders } from "./api";

type InitialState = {
  users: Array<any>;
  userStatus: string;
  editStatus: string;
  deleteStatus: string;
};

const initialState: InitialState = {
  users: [],
  userStatus: "",
  editStatus: "",
  deleteStatus: "",
};

export const usersFetch: any = createAsyncThunk(
  "users/usersFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/users/find`);
      return response.data;
    } catch (err: any) {
      console.log(err);
      toast.error(err);
    }
  }
);

export const userDelete: any = createAsyncThunk(
  "users/userDelete",
  async (id: any) => {
    try {
      const response = await axios.delete(
        `${url}/users/delete/${id}`,
        setHeaders()
      );

      return response.data;
    } catch (err: any) {
      console.log(err);
      toast.error(err.response?.data);
    }
  }
);

export const userEdit: any = createAsyncThunk(
  "users/userEdit",
  async (values: any) => {
    try {
      const response = await axios.put(
        `${url}/users/${values._id}`,
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

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [usersFetch.pending]: (state: any, action: PayloadAction) => {
      state.userStatus = "pending";
    },
    [usersFetch.fulfilled]: (state: any, action: PayloadAction) => {
      state.users = action.payload;
      state.userStatus = "success";
    },
    [usersFetch.rejected]: (state: any, action: PayloadAction) => {
      state.userStatus = "rejected";
    },
    [userEdit.pending]: (state, action: PayloadAction<any>) => {
      state.editStatus = "pending";
    },
    [userEdit.fulfilled]: (state, action: PayloadAction<any>) => {
      const updatedUser = state.users.map((user: any) =>
        user._id === action.payload ? action.payload : user
      );
      state.users = updatedUser;
      state.editStatus = "success";
      toast.info("Se ha atualizado el usuario");
    },
    [userEdit.rejected]: (state, action: PayloadAction<any>) => {
      state.editStatus = "rejected";
    },
    [userDelete.pending]: (state, action: PayloadAction<any>) => {
      state.deleteStatus = "pending";
    },
    [userDelete.fulfilled]: (state, action: PayloadAction<any>) => {
      const newList = state.users.filter(
        (item: any) => item._id !== action.payload
      );

      state.users = newList;
      state.deleteStatus = "success";
      toast.error("Se ha eliminado el producto");
    },
    [userDelete.rejected]: (state, action: PayloadAction<any>) => {
      state.deleteStatus = "rejected";
    },
  },
});

export default usersSlice.reducer;
