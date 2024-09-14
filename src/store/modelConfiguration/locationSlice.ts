import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addLocations } from "../userThunks";

interface ModelState {
  status?: string;
  error?: string;
  locations: {
    [key: string]: {
      location: string;
      latitude: string;
      longitude: string;
    };
  };
}

const initialLocationState: ModelState = {
  locations: {
    input1: {
      location: "",
      latitude: "",
      longitude: "",
    },
  },
};
const { actions, reducer } = createSlice({
  name: "location",
  initialState: initialLocationState,
  reducers: {
    setLocationStatus: (state, action: PayloadAction<keyof ModelState>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addLocations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addLocations.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.locations = action.payload;

        // state.isAuthenticated = true;
      })
      .addCase(addLocations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});
export const { setLocationStatus } = actions;
export default reducer;
