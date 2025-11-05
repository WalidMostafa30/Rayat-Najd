import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "home",
  id: null,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setProjectId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setPage, setProjectId } = mainSlice.actions;
export default mainSlice.reducer;
