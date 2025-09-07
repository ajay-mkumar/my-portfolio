import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlicse";
import workReducer from "./workExperienceSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    work: workReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
