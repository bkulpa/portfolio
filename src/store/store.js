import { configureStore } from "@reduxjs/toolkit";
import aboutVisibilityReducer from "./visibility/aboutVisibilitySlice";
import educationVisibilityReducer from "./visibility/educationVisibilitySlice";
import experienceVisibilityReducer from "./visibility/experienceVisibilitySlice";
import projectsVisibilityReducer from "./visibility/projectsVisibilitySlice";
import pageTitleReducer from "./page-title/page-title";

export default configureStore({
  reducer: {
    aboutVisibility: aboutVisibilityReducer,
    educationVisibility: educationVisibilityReducer,
    experienceVisibility: experienceVisibilityReducer,
    projectsVisibility: projectsVisibilityReducer,
    pageTitle: pageTitleReducer,
  },
});
