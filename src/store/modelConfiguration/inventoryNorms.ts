import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCategories, addInventoryNorms, addLocations } from "../userThunks";

interface ModelState {
  status?: string;
  error?: string | null;
  inventoryNorms: {
    normBasis: string;
    level: string;
    days: string;
    warehouse: string;
  };
}
const initialInventoryNormsState: ModelState = {
  inventoryNorms: {
    normBasis: "",
    level: "",
    days: "",
    warehouse: "",
  },
};
const { actions, reducer } = createSlice({
  name: "location",
  initialState: initialInventoryNormsState,
  reducers: {
    setInventoryNormsStatus: (
      state,
      action: PayloadAction<keyof ModelState>
    ) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addInventoryNorms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addInventoryNorms.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.inventoryNorms = action.payload;
        state.error = null;
        // state.isAuthenticated = true;
      })
      .addCase(addInventoryNorms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});
export const { setInventoryNormsStatus } = actions;
export default reducer;
