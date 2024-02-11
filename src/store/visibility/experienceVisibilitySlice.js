import { createSlice } from "@reduxjs/toolkit";

export const experienceVisibilitySlice = createSlice({
  name: "experienceVisibility",
  initialState: {
    isVisible: false,
  },
  reducers: {
    setVisibility: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const { setVisibility: setExperienceVisibility } =
  experienceVisibilitySlice.actions;
export default experienceVisibilitySlice.reducer;

// Powtórz tę strukturę dla `experienceVisibilitySlice`, `educationVisibilitySlice`, i `projectsVisibilitySlice`
