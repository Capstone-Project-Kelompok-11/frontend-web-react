import React from "react";
import CourseIconDash from "../../atoms/Icons/CourseIconDash.atom";

function CourseDash({ CourseStatus }) {
  return (
    <div className=" border-r-2 border-gray-600 pt-8">
      <div className="flex items-center ps-16">
        <div className="bg-red-400 p-3 rounded-xl">
          <CourseIconDash />
        </div>
        <div className="flex flex-col ps-5">
          <p>Course</p>
          <h1 className="font-bold text-3xl">{CourseStatus}</h1>
        </div>
      </div>
    </div>
  );
}

export default CourseDash;
