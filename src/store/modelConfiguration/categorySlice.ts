import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCategories, addLocations } from "../userThunks";

interface ModelState {
  status?: string;
  error?: string | null;
  categories: {
    [key: number]: string;
  };
}
const initialLocationState: ModelState = {
  categories: {
    0: "",
  },
};
const { actions, reducer } = createSlice({
  name: "location",
  initialState: initialLocationState,
  reducers: {
    setCategoryStatus: (state, action: PayloadAction<keyof ModelState>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.categories = action.payload;
        state.error = null;
        // state.isAuthenticated = true;
      })
      .addCase(addCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});
export const { setCategoryStatus } = actions;
export default reducer;
