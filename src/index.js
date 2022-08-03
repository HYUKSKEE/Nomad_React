import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Router from "./Router";
import "./styles/reset.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);

reportWebVitals();
