import { configureStore } from "@reduxjs/toolkit";
import { userReducer, infoReducer } from "./slice";
import modelReducer from "./modelConfiguration/modelSlice";
import locationReducer from "./modelConfiguration/locationSlice";
import categoryReducer from "./modelConfiguration/categorySlice";
import inventoryNormsReducrers from "./modelConfiguration/inventoryNorms";
import { combineReducers } from "@reduxjs/toolkit";

const modelConfigurationReducer = combineReducers({
  LocationMaster: locationReducer,
  CategoryMaster: categoryReducer,
  InventoryNorms: inventoryNormsReducrers,
  // PriceMaster
  // inventoryNorem: {
  //  norms1

  //  InventoryNorms2
  //  salsepattern
  // }
  // shipmentnorm
});

const rootReducer = combineReducers({
  user: userReducer,
  information: infoReducer,
  modelConfigProcess: modelReducer,
  modelConfiguration: modelConfigurationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
