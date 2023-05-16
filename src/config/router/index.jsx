import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardView from "../../views/DashboardView";
import CourseView from "../../views/CourseView";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/course" element={<CourseView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
