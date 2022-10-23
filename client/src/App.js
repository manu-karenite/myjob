import React from "react";
import { Toaster } from "react-hot-toast";

import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Company/Login.js";
import Register from "./Pages/Company/Register.js";
import Home from "./Pages/Company/Home.js";

//for company

const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      {/* <NavBar /> */}
      <Routes>
        <Route path="/company" exact element={<Home />} />
        <Route path="/company/login" exact element={<Login />} />
        <Route path="/company/register" exact element={<Register />} />
        <Route path="*" element={<Navigate to="/company/login" replace />} />
      </Routes>
    </>
  );
};

export default App;
