import { configureStore } from "@reduxjs/toolkit";
import visibilityReducer from "./visibility/visibility.reducer";
export default configureStore({
  reducer: {
    visibility: visibilityReducer,
  },
});
