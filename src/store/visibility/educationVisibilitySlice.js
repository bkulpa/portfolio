import { createSlice } from "@reduxjs/toolkit";

export const educationVisibilitySlice = createSlice({
  name: "educationVisibility",
  initialState: {
    isVisible: false,
  },
  reducers: {
    setVisibility: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const { setVisibility: setEducationVisibility } =
  educationVisibilitySlice.actions;
export default educationVisibilitySlice.reducer;
