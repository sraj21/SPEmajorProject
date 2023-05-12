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
import mortgageListReducer from "./reducers/mortgageListReducer";
import paymentReducer from "./reducers/paymentReducer";
import paymentListReducer from "./reducers/paymentListReducer";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    customerList: customerListReducer,
    mortgage: mortgageReducer,
    mortgageList: mortgageListReducer,
    payment: paymentReducer,  
    paymentList: paymentListReducer,},
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
