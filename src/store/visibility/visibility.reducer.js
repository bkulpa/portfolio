import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState: {
    isTest2aVisible: false,
  },
  reducers: {
    setVisibility: (state, action) => {
      state.isTest2aVisible = action.payload;
    },
  },
});

export const { setVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;
