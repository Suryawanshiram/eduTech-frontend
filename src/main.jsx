import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import "./index.css";
import App from "./App.jsx";
import rootReducer from "./reducer/index.js"; // ✅ Combined reducers

// ✅ Create Redux store using rootReducer
const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.MODE !== "production", // optional: enable Redux devtools in dev mode
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// import React from "react";

// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import rootReducer from "./reducer/index.js";
// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//   reducer: rootReducer,
// });

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );
