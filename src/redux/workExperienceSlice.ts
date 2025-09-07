import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  WorkExperienceRequest,
  WorkExperienceResponse,
  WorkState,
} from "./type/WorkType";
import { getRequest, putRequest } from "../utility/ApiRequestHelper";


export const addWorkExperience = createAsyncThunk<
  WorkExperienceResponse,
  WorkExperienceRequest & { id?: string }
>("work/addWorkExperience", async ({ id, ...workExperienceRequest }) => {
  const url = id
    ? `/user/workExperience?id=${id}` // id as RequestParam
    : "/user/workExperience";
  return await putRequest(url, workExperienceRequest);
});

export const fetchWorkExperience = createAsyncThunk<WorkExperienceResponse[], string>(
  "users/fetchWorkExp",
  async (username) => {
    return await getRequest("/portfolio/workExp", { username });
  }
);

const initialState: WorkState = {
  loading: false,
  error: null,
  workExperience: null,
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
        const updatedExp = action.payload;

        if (state.workExperience) {
          const exists = state.workExperience.some(
            (exp) => exp.id === updatedExp.id
          );

          if (exists) {
            // update the existing experience
            state.workExperience = state.workExperience.map((exp) =>
              exp.id === updatedExp.id ? { ...exp, ...updatedExp } : exp
            );
          } else {
            // add new experience to the array
            state.workExperience.push(updatedExp);
          }
        } else {
          // first item in the array
          state.workExperience = [updatedExp];
        }
      })
      .addCase(addWorkExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something went wrong";
      })
      .addCase(fetchWorkExperience.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWorkExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.workExperience = action.payload;
      })
      .addCase(fetchWorkExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default workExperienceSlice.reducer;
