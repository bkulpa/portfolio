import { configureStore } from "@reduxjs/toolkit";
import aboutVisibilityReducer from "./visibility/aboutVisibilitySlice";
import experienceVisibilityReducer from "./visibility/experienceVisibilitySlice";

export default configureStore({
  reducer: {
    aboutVisibility: aboutVisibilityReducer, // Zmieniono nazwę klucza dla lepszej czytelności
    experienceVisibility: experienceVisibilityReducer,
  },
});
