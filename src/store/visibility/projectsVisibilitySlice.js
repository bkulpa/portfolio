import { createSlice } from "@reduxjs/toolkit";

export const projectsVisibilitySlice = createSlice({
  name: "projectsVisibility",
  initialState: {
    isProjectsSectionOnTheScreen: false,
  },
  reducers: {
    setProjectsVisibility: (state, action) => {
      state.isProjectsSectionOnTheScreen = action.payload;
    },
  },
});

export const { setProjectsVisibility } = projectsVisibilitySlice.actions;
export default projectsVisibilitySlice.reducer;
