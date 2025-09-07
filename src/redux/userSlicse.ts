import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  LoginRequest,
  ProjectDetails,
  UserDetails,
  UserState,
  WorkExperience,
} from "./type/UserType";
import { getRequest, postRequest } from "../utility/ApiRequestHelper";

export const fetchUserDetails = createAsyncThunk<UserDetails, string>(
  "users/fetchUserDetails",
  async (username) => {
    return await getRequest("/portfolio", { username });
  }
);

export const loginUser = createAsyncThunk<string, LoginRequest>(
  "users/loginUser",
  async (loginRequest) => {
    return await postRequest("/api/auth", loginRequest);
  }
);

export const fetchProjects = createAsyncThunk<ProjectDetails[], string>(
  "users/fetchProjects",
  async (username) => {
    return await getRequest("/portfolio/projects", { username });
  }
);

export const fetchWorkExperience = createAsyncThunk<WorkExperience[], string>(
  "users/fetchWorkExp",
  async (username) => {
    return await getRequest("/portfolio/workExp", { username });
  }
);

const storedUser: string | null = localStorage.getItem("userDetails");
const parsedUser = storedUser ? JSON.parse(storedUser) : null;

const initialState: UserState = {
  userDetails: parsedUser,
  workDetails: parsedUser?.workExperience
    ? JSON.parse(parsedUser.workExperience)
    : null,
  accademics: parsedUser?.accademics ? JSON.parse(parsedUser.accademics) : null,
  projects: null,
  workExperience: null,
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
        localStorage.setItem("userDetails", JSON.stringify(action.payload));
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
      })
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
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

export default userSlice.reducer;
