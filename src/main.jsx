import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import App from "./App.jsx";
import { registerSW } from "virtual:pwa-register";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

registerSW({
  onNeedRefresh() {},
  onOfflineReady() {
    console.log("التطبيق جاهز للعمل أوفلاين ✅");
  },
});
