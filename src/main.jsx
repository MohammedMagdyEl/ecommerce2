import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./assets/redux/store/productStore";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* Correct 'store' */}
      <App />
    </Provider>
  </StrictMode>
);
