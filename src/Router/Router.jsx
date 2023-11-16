import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login} from "../User/Login";
import {Signup} from "../User/Signup"
import Home from "../User/Home"
import AboutUs from "../User/AboutUs"
import ContactUs from "../User/ContactUs"
import Pricing from "../User/Pricing"
import Profile from "../User/Profile"
import Messages from "../User/Messages"
import Price from "../User/Price"
import { AdminLogin } from "../Admin/LoginAdmin";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Price" element={<Price />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;