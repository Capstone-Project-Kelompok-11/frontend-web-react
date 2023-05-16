import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../../components/organism/Dashboard";
import Course from "../../../components/organism/Course";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
