import React from "react";
import NewCourseForm from "../../components/organism/NewCourseForm/NewCourse.organism";
import { useLocation } from "react-router-dom";

function NewCourse() {
  const { state } = useLocation();
  return <NewCourseForm {...state} />;
}

export default NewCourse;
