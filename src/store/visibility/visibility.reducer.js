import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState: {
    isAboutSectionOnTheScreen: false,
    setExperienceVisibility: false,
    setEducationVisibility: false,
    setProjectsVisibility: false,
  },
  reducers: {
    setAboutVisibility: (state, action) => {
      state.isAboutSectionOnTheScreen = action.payload;
    },
    setExperienceVisibility: (state, action) => {
      state.isExperienceSectionOnTheScreen = action.payload;
    },
    setEducationVisibility: (state, action) => {
      state.isExperienceSectionOnTheScreen = action.payload;
    },
    setProjectsVisibility: (state, action) => {
      state.isExperienceSectionOnTheScreen = action.payload;
    },
  },
});

export const {
  setAboutVisibility,
  setExperienceVisibility,
  setEducationVisibility,
  setProjectsVisibility,
} = visibilitySlice.actions;
export default visibilitySlice.reducer;
