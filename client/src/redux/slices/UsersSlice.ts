import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "./api";

type InitialState = {
  users: Array<any>;
  userStatus: string;
};

const initialState: InitialState = {
  users: [],
  userStatus: "",
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
  },
});

export default usersSlice.reducer;
