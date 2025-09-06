import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { LoginRequest, UserDetails, UserState } from "./type/UserType";

export const fetchUserDetails = createAsyncThunk<UserDetails, string>(
  "users/fetchUserDetails",
  async (username) => {
    const response = await axios.get<UserDetails>(
      `http://localhost:8080/portfolio?username=${username}`
    );
    return response.data;
  }
);

export const loginUser = createAsyncThunk<string, LoginRequest>(
  "users/loginUser",
  async (loginRequest) => {
    const response = await axios.post(
      "http://localhost:8080/api/auth/",
      loginRequest
    );
    return response.data;
  }
);

const initialState: UserState = {
  userDetails: null,
  token: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userDetails = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default userSlice.reducer;
