import { createSlice } from "@reduxjs/toolkit";

export const experienceVisibilitySlice = createSlice({
  name: "experienceVisibility",
  initialState: {
    isExperienceSectionOnTheScreen: false,
  },
  reducers: {
    setExperienceVisibility: (state, action) => {
      state.isExperienceSectionOnTheScreen = action.payload;
    },
  },
});

export const { setExperienceVisibility } = experienceVisibilitySlice.actions;
export default experienceVisibilitySlice.reducer;
