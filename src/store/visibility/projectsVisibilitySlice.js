import { createSlice } from "@reduxjs/toolkit";

export const projectsVisibilitySlice = createSlice({
  name: "projectsVisibility",
  initialState: {
    isVisible: false,
  },
  reducers: {
    setVisibility: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const { setVisibility: setProjectsVisibility } =
  projectsVisibilitySlice.actions;
export default projectsVisibilitySlice.reducer;

// root: null,
// rootMargin: "-33% 0px -33% 0px",

// threshold: 1,
