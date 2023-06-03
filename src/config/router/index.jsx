import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import CreateNewChapterView from "../../views/Chapter/CreateNewChapter.view";
import NewChapter from "../../views/Chapter/NewChapter.view";

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
          <Route path="/course/new-course" element={<NewCourseView />} />
          <Route
            path="/course/:course_name/new_chapter"
            element={<NewChapter />}
          />
          <Route
            path="/course/:course_name/new_chapter/update_chapter"
            element={<CreateNewChapterView />}
          />
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
