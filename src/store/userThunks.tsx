import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";

export const registerUser = createAsyncThunk(
  "user/register",
  async (data: FormData, thunkAPI) => {
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");
    // Ensure passwords match
    if (password !== confirmPassword) {
      return thunkAPI.rejectWithValue("Passwords do not match");
    }

    try {
      const response = await axios.post("/register", {
        email,
        password,
      });
      console.log(response.data);
      return response.data.parameters;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(
          error.message || "An unexpected error occurred"
        );
      }
      return thunkAPI.rejectWithValue("An unexpected error occurred");
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/login",
  async (data: FormData, thunkAPI) => {
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const email = data.get("email");
    const password = data.get("password");
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        },
        config
      );

      return response.data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      return thunkAPI.rejectWithValue("An unexpected error occurred");
    }
  }
);
export const addUserDetails = createAsyncThunk(
  "user/addUserDetails",
  async (
    {
      userInfo,
      organisationInfo,
    }: {
      userInfo: Record<string, unknown>;
      organisationInfo: Record<string, unknown>;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(
        "/adduserdetails",
        {
          userInfo,
          organisationInfo,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(
          error.message || "An unexpected error occurred"
        );
      }
      return thunkAPI.rejectWithValue("An unexpected error occurred");
    }
  }
);
export const addLocations = createAsyncThunk(
  "config/addLocations",
  async (
    {
      locations,
    }: {
      locations: Record<
        string,
        { location: string; latitude: string; longitude: string }
      >;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(
        "/addlocations",
        {
          locations,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(
          error.message || "An unexpected error occurred"
        );
      }
      return thunkAPI.rejectWithValue("An unexpected error occurred");
    }
  }
);
export const addCategories = createAsyncThunk(
  "config/addcategories",
  async (categories: [{ name: string }], thunkAPI) => {
    try {
      const response = await axios.post("/addcategories", categories, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(
          error.message || "An unexpected error occurred"
        );
      }
      return thunkAPI.rejectWithValue("An unexpected error occurred");
    }
  }
);
export const addInventoryNorms = createAsyncThunk(
  "config/InventoryNorms",
  async (
    inventoryNorms: {
      normbasis: string;
      level: string;
      days: string;
      warehouse: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post("/addinventorynorms", inventoryNorms, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(
          error.message || "An unexpected error occurred"
        );
      }
      return thunkAPI.rejectWithValue("An unexpected error occurred");
    }
  }
);
export const addWarehouse = createAsyncThunk(
  "config/InventoryNorms",
  async (
    inventoryNorms: {
      normbasis: string;
      level: string;
      days: string;
      warehouse: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post("/addinventorynorms", inventoryNorms, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(
          error.message || "An unexpected error occurred"
        );
      }
      return thunkAPI.rejectWithValue("An unexpected error occurred");
    }
  }
);
