import { createSlice } from "@reduxjs/toolkit";

export const aboutVisibilitySlice = createSlice({
  name: "aboutVisibility",
  initialState: {
    isAboutSectionOnTheScreen: false,
  },
  reducers: {
    setAboutVisibility: (state, action) => {
      state.isAboutSectionOnTheScreen = action.payload;
    },
  },
});

export const { setAboutVisibility } = aboutVisibilitySlice.actions;
export default aboutVisibilitySlice.reducer;
