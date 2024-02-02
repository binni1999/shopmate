import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Cart, Home } from "../pages";

const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default AllRoutes;
