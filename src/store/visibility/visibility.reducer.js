import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState: {
    isMenuSectionOnTheScreen: false,
  },
  reducers: {
    setVisibility: (state, action) => {
      state.isMenuSectionOnTheScreen = action.payload;
    },
  },
});

export const { setVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;
