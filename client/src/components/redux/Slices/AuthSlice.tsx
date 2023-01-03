import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
// import { toast } from "react-toastify"; falta colocarlo

interface InitialState {
  token: string | null;
  name: string;
  email: string;
  _id: string;
  registerStatus: string;
  registerError: string;
  loginStatus: string;
  loginError: string;
  userLoaded: boolean;
}

const initialState: InitialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values: any, { rejectWithValue }: any) => {
    try {
      const token = await axios.post("http://localhost:3001/api/register", {
        name: values.name,
        email: values.email,
        password: values.password,
        adress: values.adress,
      });

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (err: any) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values: any, { rejectWithValue }: any) => {
    try {
      const token = await axios.post("http://localhost:3001/api/login", {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (err: any) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

const authiSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action: PayloadAction<any>) {
      const token = state.token;
      if (token) {
        const user: any = jwtDecode(token);

        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          adress: user.adress,
          _id: user._id,
          registerStatus: "sucess",
        };
      }
    },
    logoutUser(state, action: PayloadAction<any>) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        userLoaded: true,
      };
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(
      registerUser.pending,
      (state: any, action: PayloadAction<any>) => {
        return { ...state, registerStatus: "pending" };
      }
    );
    builder.addCase(
      registerUser.fulfilled,
      (state: any, action: PayloadAction<any>) => {
        if (action.payload) {
          const user: any = jwtDecode(action.payload);

          return {
            ...state,
            token: action.payload,
            name: user.name,
            email: user.email,
            adress: user.adress,
            _id: user._id,
            registerStatus: "sucess",
          };
        } else {
          return state;
        }
      }
    );
    builder.addCase(
      registerUser.rejected,
      (state: any, action: PayloadAction<any>) => {
        return {
          ...state,
          registerStatus: "rejected",
          registerError: action.payload,
        };
      }
    );
    builder.addCase(
      loginUser.pending,
      (state: any, action: PayloadAction<any>) => {
        return { ...state, loginStatus: "pending" };
      }
    );
    builder.addCase(
      loginUser.fulfilled,
      (state: any, action: PayloadAction<any>) => {
        if (action.payload) {
          const user: any = jwtDecode(action.payload);

          return {
            ...state,
            token: action.payload,
            name: user.name,
            email: user.email,
            adress: user.adress,
            _id: user._id,
            registerStatus: "sucess",
          };
        } else {
          return state;
        }
      }
    );
    builder.addCase(
      loginUser.rejected,
      (state: any, action: PayloadAction<any>) => {
        return {
          ...state,
          loginStatus: "rejected",
          loginError: action.payload,
        };
      }
    );
  },
});

export const { loadUser, logoutUser } = authiSlice.actions;

export default authiSlice.reducer;
