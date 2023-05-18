import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardTemplate from "../../components/templates/Dashboard.template";
import DashboardView from "../../views/Dashboard.view";
import CourseView from "../../views/Course.view";
import ReportingView from "../../views/Reporting.view";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardTemplate />}>
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/course" element={<CourseView />} />
          <Route path="/reporting" element={<ReportingView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
