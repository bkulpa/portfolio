import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState: {
    isAboutSectionOnTheScreen: false,
  },
  reducers: {
    setAboutVisibility: (state, action) => {
      state.isAboutSectionOnTheScreen = action.payload;
    },
  },
});

export const { setAboutVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;
