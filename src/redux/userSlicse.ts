import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  LoginRequest,
  LoginResponse,
  ProjectDetails,
  UpdateUserDetailsType,
  UserDetails,
  UserState,
  WorkExperience,
} from "./type/UserType";
import {
  getRequest,
  postRequest,
  putRequest,
} from "../utility/ApiRequestHelper";
import { getToken, setToken } from "../utility/TokenHelper";

export const fetchUserDetails = createAsyncThunk<UserDetails, string>(
  "users/fetchUserDetails",
  async (username) => {
    return await getRequest("/portfolio", { username });
  }
);

export const loginUser = createAsyncThunk<LoginResponse, LoginRequest>(
  "users/loginUser",
  async (loginRequest) => {
    return await postRequest("/api/auth/", loginRequest);
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

export const UpdateUserDetails = createAsyncThunk<
  UserDetails,
  UpdateUserDetailsType
>("users/UpdateUserDetails", async ({ field, value }) => {
  return await putRequest("/user/updateUser", { [field]: value });
});

const storedUser: string | null = localStorage.getItem("userDetails");
const parsedUser = storedUser ? JSON.parse(storedUser) : null;

const initialState: UserState = {
  username: localStorage.getItem("username") || null,
  userDetails: parsedUser,
  workDetails: parsedUser?.workExperience
    ? JSON.parse(parsedUser.workExperience)
    : null,
  accademics: parsedUser?.accademics ? JSON.parse(parsedUser.accademics) : null,
  projects: null,
  workExperience: null,
  token: getToken() || null,
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
        state.workDetails =
          action.payload.workExperience &&
          JSON.parse(action.payload.workExperience);
        state.accademics =
          action.payload.accademics && JSON.parse(action.payload.accademics);
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
        const { username, token } = action.payload;
        state.loading = false;
        state.error = null;
        state.token = token;
        state.username = username;
        setToken(token, username, 3600)
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
      })
      .addCase(UpdateUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(UpdateUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userDetails = action.payload;

        if (action.meta.arg.field === "workExperience") {
          state.workDetails =
            action.payload.workExperience &&
            JSON.parse(action.payload.workExperience);
        }

        if (action.meta.arg.field === "accademics") {
          state.accademics =
            action.payload.accademics && JSON.parse(action.payload.accademics);
        }
      })
      .addCase(UpdateUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default userSlice.reducer;
