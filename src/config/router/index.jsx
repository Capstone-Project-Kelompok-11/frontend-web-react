import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardTemplate from "../../components/templates/Dashboard.template";
import DashboardView from "../../views/Dashboard.view";
import CourseView from "../../views/Course.view";
import ReportingView from "../../views/Reporting.view";
import ProfileView from "../../views/Profile.view";
import DetailCourseView from "../../views/DetailCourse.view";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardTemplate />}>
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/course" element={<CourseView />} />
          <Route path="/course/:id" element={<DetailCourseView />} />
          <Route path="/reporting" element={<ReportingView />} />
          <Route path="/profile" element={<ProfileView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
