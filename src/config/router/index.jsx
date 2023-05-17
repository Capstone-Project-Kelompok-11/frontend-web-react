import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardView from "../../views/DashboardView";
import CourseView from "../../views/CourseView";
import DashboardTemplate from "../../components/templates/DashboardTemplate";
import ReportingView from "../../views/ReportingView";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardTemplate />}  > 
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/course" element={<CourseView />} />
        <Route path="/reporting" element={<ReportingView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
