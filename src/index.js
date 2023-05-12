import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import customerReducer from "./reducers/customerReducer";
import customerListReducer from "./reducers/customerListReducer";
import mortgageReducer from "./reducers/mortgageReducer";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    customerList: customerListReducer,
    mortgage: mortgageReducer,  },
});



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
        <App />
  </Provider>
  // </React.StrictMode>
);
reportWebVitals();
