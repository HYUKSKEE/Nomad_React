import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./LoginJS/Login";
import Main from "./MainJS/Main";
import Router from "./Router";
import "./reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);

reportWebVitals();
