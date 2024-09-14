import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModelState {
  location: boolean;
  CategoryMaster: boolean;
  pricemaster: boolean;
  InventoryNorms: boolean;
  ShipmentNorm: boolean;
  locationPending: boolean;
  CategoryMasterPending: boolean;
  pricemasterPending: boolean;
  InventoryNormsPending: boolean;
  ShipmentNormPending: boolean;
}

const initialModelState: ModelState = {
  location: false,
  CategoryMaster: false,
  pricemaster: false,
  InventoryNorms: false,
  ShipmentNorm: false,

  locationPending: false,
  CategoryMasterPending: false,
  pricemasterPending: false,
  InventoryNormsPending: false,
  ShipmentNormPending: false,
};
const { actions, reducer } = createSlice({
  name: "modelConfProgress",
  initialState: initialModelState,
  reducers: {
    setModelProgress: (state, action: PayloadAction<keyof ModelState>) => {
      state[action.payload] = true;
    },
  },
});

export const { setModelProgress } = actions;
export default reducer;
