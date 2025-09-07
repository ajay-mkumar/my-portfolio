import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  WorkExperienceRequest,
  WorkExperienceResponse,
  WorkState,
} from "./type/WorkType";
import { putRequest } from "../utility/ApiRequestHelper";

export const addWorkExperience = createAsyncThunk<
  WorkExperienceResponse,
  WorkExperienceRequest
>("work/addWorkExperience", async (workExperienceRequest) => {
  return await putRequest("/user/workExperience", workExperienceRequest);
});

const initialState: WorkState = {
  workExperience: null,
  loading: false,
  error: null,
};

const workExperienceSlice = createSlice({
  name: "work",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addWorkExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(addWorkExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.workExperience = action.payload;
      })
      .addCase(addWorkExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something went wrong";
      });
  },
});

export default workExperienceSlice.reducer;
