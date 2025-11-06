import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ جلب البيانات من الـ API أو من localStorage في حالة عدم وجود إنترنت
export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://projectsmap.quick2tech.online/getData"
      );

      // ✅ تخزين البيانات في localStorage بعد نجاح الجلب
      localStorage.setItem("projectsData", JSON.stringify(data));
      localStorage.setItem("isOnline", "true");

      return data;
    } catch (error) {
      console.warn(
        "⚠️ لم يتم الاتصال بالإنترنت، سيتم استخدام البيانات المخزنة محليًا."
      );

      // ✅ محاولة استرجاع البيانات من localStorage
      const storedData = localStorage.getItem("projectsData");

      if (storedData) {
        localStorage.setItem("isOnline", "false");
        return JSON.parse(storedData);
      }

      // ❌ في حالة عدم وجود بيانات مخزنة مسبقًا
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
  isOnline: true,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setOnlineStatus: (state, action) => {
      state.isOnline = action.payload;
      localStorage.setItem("isOnline", action.payload ? "true" : "false");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.isOnline = localStorage.getItem("isOnline") === "true";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isOnline = localStorage.getItem("isOnline") === "true";
      });
  },
});

export const { setOnlineStatus } = dataSlice.actions;
export default dataSlice.reducer;

// ✅ مراقبة الاتصال بالإنترنت لتحديث الحالة تلقائيًا
export const setupNetworkListener = (dispatch) => {
  window.addEventListener("online", () => {
    console.log("✅ تم استرجاع الاتصال بالإنترنت");
    dispatch(setOnlineStatus(true));
    dispatch(fetchData()); // ⚡️ إعادة تحميل البيانات تلقائيًا
  });

  window.addEventListener("offline", () => {
    console.log("🚫 تم فقد الاتصال بالإنترنت");
    dispatch(setOnlineStatus(false));
  });
};
