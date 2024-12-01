import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  loading: false,
  success: false,
};

// Post subscribe
export const subscribe = createAsyncThunk(
  "subscribe/subscribe",
  async (data) => {
    const response = await axios.post(`${API_URL}/subscribe`, data);
    return response.data;
  }
);

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSuccess(state, action) {
      state.success = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(subscribe.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    });
  },
});

export const setTimeoutSuccess = () => (dispatch) => {
  setTimeout(() => {
    dispatch(setSuccess(false));
  }, 3000);
};

export const { setLoading, setSuccess } = subscribeSlice.actions;

export default subscribeSlice.reducer;
