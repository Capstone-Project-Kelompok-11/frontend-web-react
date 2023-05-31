import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardTemplate from "../../components/templates/Dashboard.template";
import DashboardView from "../../views/Dashboard.view";
import CourseView from "../../views/Course.view";
import ReportingView from "../../views/Reporting.view";
import ProfileView from "../../views/Profile.view";
import LandingPage from "../../views/LandingPage.view";
import Login from "../../views/Login.view";
import ProfileMyCourse from "../../views/ProfileMyCourse.view";
import DetailCourseView from "../../views/DetailCourse.view";
import NewCourseView from "../../views/NewCourse.view";
import NewChapterView from "../../views/NewChapter.view";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<DashboardTemplate />}>
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/course" element={<CourseView />} />
          <Route path="/course/newcorse" element={<NewCourseView />} />
          <Route path="/course/newcourse" element={<NewCourseView />} />
          <Route path="/course/newchapter" element={<NewChapterView />} />
          <Route path="/course/:id" element={<DetailCourseView />} />
          <Route path="/reporting" element={<ReportingView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/profile/mycourse" element={<ProfileMyCourse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
