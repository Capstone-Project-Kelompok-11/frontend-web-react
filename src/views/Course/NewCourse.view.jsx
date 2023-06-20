import React from "react";
import { useLocation } from "react-router-dom";
import NewCourseForm from "../../components/organism/NewCourseForm/NewCourse.organism";
import { useLocation } from "react-router-dom";

function NewCourse() {
  const { state } = useLocation();
  return <NewCourseForm {...state} />;
}

export default NewCourse;
