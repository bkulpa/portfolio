import { createSlice } from "@reduxjs/toolkit";

export const educationVisibilitySlice = createSlice({
  name: "educationVisibility",
  initialState: {
    isEducationSectionOnTheScreen: false,
  },
  reducers: {
    setEducationVisibility: (state, action) => {
      state.isEducationSectionOnTheScreen = action.payload;
    },
  },
});

export const { setEducationVisibility } = educationVisibilitySlice.actions;
export default educationVisibilitySlice.reducer;
