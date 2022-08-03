import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login-JS/Login";
import Main from "./pages/Main-JS/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
