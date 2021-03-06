import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import { configureStore } from "./store/reducers/configureStore";
import { _fetchCities } from "./store/actions/cityActions";
import { _fetchJobTitles } from "./store/actions/jobTitleActions";
import { _fetchSalaryScales } from "./store/actions/salaryScaleActions";
import { _fetchAdvertisements } from "./store/actions/jobAdvertisementActions";

const store = configureStore();
const _init = [_fetchCities(), _fetchJobTitles(), _fetchSalaryScales(),_fetchAdvertisements()];

_init.map((func) => {
  return store.dispatch(func);
});
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
