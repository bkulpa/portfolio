import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "./visibility/aboutVisibilitySlice";
export default configureStore({
  reducer: {
    visibility: visibilityReducer,
  },
});
