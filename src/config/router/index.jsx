import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardTemplate from "../../components/templates/Dashboard.template";
import DashboardView from "../../views/Dashboard.view";
import CourseView from "../../views/Course/Course.view";
import ReportingView from "../../views/Reporting/Reporting.view";
import ProfileView from "../../views/Profile.view";
import LandingPage from "../../views/LandingPage.view";
import Login from "../../views/Login.view";
import ProfileMyCourse from "../../views/ProfileMyCourse.view";
import DetailCourseView from "../../views/Course/DetailCourse.view";
import Quiz from "../../views/Quiz/Quiz.view";
import ReportingSummary from "../../views/Reporting/ReportingSummary.view";

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
          <Route
            path="/course/:id_course/chapter/new_quiz"
            element={<Quiz />}
          />
          <Route
            path="/course/:id_course/chapter/:id_chapter/update_quiz"
            element={<Quiz />}
          />
          <Route path="/course/:id" element={<DetailCourseView />} />
          <Route path="/reporting" element={<ReportingView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/profile/mycourse" element={<ProfileMyCourse />} />
          <Route
            path="/reporting/:course_name/:detail_user"
            element={<ReportingSummary />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
