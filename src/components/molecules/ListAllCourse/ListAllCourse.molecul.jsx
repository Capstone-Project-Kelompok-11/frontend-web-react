import React from "react";
import { Link } from "react-router-dom";
import { makeRupiahValue } from "../../../utils/helperMethod";
import AnonymousIcon from "../../atoms/Icons/AnonymousIcon.atom";

function ListAllCourse({ course }) {
  const price = makeRupiahValue(course.coursePrice);
  return (
    <div className="border border-black rounded-xl text-sm px-8 mr-8 py-2 my-4">
      <div className="grid grid-cols-5 items-center ">
        <p className="font-medium text-base"> {course.courseName}</p>
        <p className="font-bold text-base pt-4">{price}</p>
        <div className="flex items-center mx-8 mt-4">
          <AnonymousIcon />
          <p className="font-bold text-lg ml-4 pt-2">{course.totalMember}</p>
        </div>
        <p className="pt-4">{course.category}</p>
        <Link
          to="/profile"
          className=" mx-auto py-2 px-6 mt-2 rounded-xl font-bold  bg-primary-50 "
        >
          Detail
        </Link>
      </div>
      <div className="flex gap-3 text-gray-400 text-sm  -mt-3">
        <p>{course.totalMaterial} Material</p>
        <p>{course.totalCourse} Course</p>
      </div>
    </div>
  );
}

export default ListAllCourse;
