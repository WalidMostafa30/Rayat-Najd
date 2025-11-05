import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ جلب البيانات من الـ API
export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://projectsmap.quick2tech.online/getData"
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "حدث خطأ أثناء جلب المشاريع"
      );
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dataSlice.reducer;
