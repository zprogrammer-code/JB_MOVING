import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import "./app.css";
import Main from "/home/zprogrammercode/jb_moving/src/Pages/Main/main.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
