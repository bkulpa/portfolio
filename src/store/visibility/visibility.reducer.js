import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
  name: "visibilityAbout",
  initialState: {
    isAboutSectionOnTheScreen: false,
  },
  reducers: {
    setVisibility: (state, action) => {
      state.isAboutSectionOnTheScreen = action.payload;
    },
  },
});

export const { setVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;
