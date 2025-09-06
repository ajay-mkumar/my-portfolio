import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { UserDetails, UserState } from "./type/UserType";

export const fetchUserDetails = createAsyncThunk<UserDetails, string>(
  "users/fetchUserDetails",
  async (username) => {
    const response = await axios.get<UserDetails>(
      `http://localhost:8080/portfolio?username=${username}`
    );
    return response.data;
  }
);

const initialState: UserState = {
  userDetails: null,
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
      });
  },
});

export default userSlice.reducer;
