import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";
import dataReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    data: dataReducer,
  },
});
