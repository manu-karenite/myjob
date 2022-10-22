import React from "react";
import NavBar from "./Components/Navbar/NavBar.js";
import { Routes, Route, useParams } from "react-router-dom";
import Login from "./Pages/Company/Login.js";
import Register from "./Pages/Company/Register.js";
import Home from "./Pages/Company/Home.js";

//for company

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/company" exact element={<Home />} />
        <Route path="/company/login" exact element={<Login />} />
        <Route path="/company/register" exact element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
