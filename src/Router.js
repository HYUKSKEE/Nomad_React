import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginJS/Login";
import Main from "./MainJS/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
