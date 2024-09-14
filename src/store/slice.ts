import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addUserDetails, loginUser, registerUser } from "./userThunks";

// Define a type for the slice state
interface CounterState {
  user: null | {
    id: string;

    email: string;
  };
  status?: "idle" | "loading" | "succeeded" | "failed";
  error?: null | string;
  isAuthenticated: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        return {
          ...state,
          status: "failed",
          error: action.error.message || "An error occurred",
        };
      });
  },
});
interface UserState {
  status?: string;
  error?: null | string;
  userInfo: {
    input1: string;
  };
  organisationInfo: {
    input1: string;
  };
}

const initialInfoState: UserState = {
  userInfo: {
    input1: "",
  },
  organisationInfo: {
    input1: "",
  },
};

const infoSlice = createSlice({
  name: "info",
  initialState: initialInfoState,
  reducers: {
    setInfo: (state, action: PayloadAction<UserState>) => {
      state.userInfo = action.payload.userInfo;
      state.organisationInfo = action.payload.organisationInfo;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUserDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUserDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.userInfo = action.payload.userInfo;
        state.organisationInfo = action.payload.organisationInfo;
        // state.isAuthenticated = true;
      })
      .addCase(addUserDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const { setInfo } = infoSlice.actions;
export const infoReducer = infoSlice.reducer;
// export const { increment, decrement, incrementByAmount } = userSlice.actions;
export const userReducer = userSlice.reducer;
