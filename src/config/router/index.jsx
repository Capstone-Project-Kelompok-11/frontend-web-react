import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardTemplate from "../../components/templates/Dashboard.template";
import DashboardView from "../../views/Dashboard/Dashboard.view";
import CourseView from "../../views/Course/Course.view";
import ReportingView from "../../views/Reporting/Reporting.view";
import ProfileView from "../../views/Profile/Profile.view";
import LandingPage from "../../views/LandingPage/LandingPage.view";
import Login from "../../views/LoginPage/Login.view";
import ProfileMyCourse from "../../views/Profile/ProfileMyCourse.view";
import DetailCourseView from "../../views/Course/DetailCourse.view";
import NewCourseView from "../../views/Course/NewCourse.view";
import Quiz from "../../views/Quiz/Quiz.view";
import ReportingSummary from "../../views/Reporting/ReportingSummary.view";
import ReportingUserView from "../../views/Reporting/ReportingUser.view";
import DetailChapter from "../../views/Chapter/DetailChapter.view";
import NewChapterView from "../../views/Chapter/NewChapter.view";

function RootRouter() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODYxMzE4NzY3MTEsImlhdCI6MTY4NjA0NTQ3Njc4NSwidWlkIjoiODY5NDc2YWY0Zjk4NDcyZGI3Zjk3YTljZmU1ZGE0NmYifQ.M057r96A-hehdZsqV0650Horz6V4a4ftIytFxQlMInQ";

  const isAuthenticated = !!token;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        {isAuthenticated ? (
          <Route element={<DashboardTemplate />}>
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/course" element={<CourseView />} />
            <Route path="/course/new-course" element={<NewCourseView />} />
            <Route
              path="/course/:course_name/new-chapter"
              element={<NewChapterView />}
            />
            <Route
              path="/course/:id_course/chapter/new_quiz"
              element={<Quiz />}
            />
            <Route
              path="/course/:id_course/chapter/:id_chapter/update_quiz"
              element={<Quiz />}
            />
            <Route
              path="/course/:id_course/chapter/:id_chapter"
              element={<DetailChapter />}
            />
            <Route path="/course/:id" element={<DetailCourseView />} />
            <Route path="/reporting" element={<ReportingView />} />
            <Route
              path="/reporting/:course_name"
              element={<ReportingUserView />}
            />
            <Route
              path="/reporting/:course_name/:detail_user"
              element={<ReportingSummary />}
            />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/profile/mycourse" element={<ProfileMyCourse />} />
          </Route>
        ) : (
          <Route
            path="*"
            element={<Navigate to="/login" replace={true} />} // Alihkan ke halaman login jika tidak ada token
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
