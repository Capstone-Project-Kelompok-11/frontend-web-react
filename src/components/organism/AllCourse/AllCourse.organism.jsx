import React from "react";

import { Link } from "react-router-dom";

function AllCourse() {
  return (
    <div className="text-center">
      <div className="flex items-center gap-4">
        <p className="text-2xl">All Course</p>
        <Link to="/course/newcourse">
          <button class="bg-blue-500 hover:bg-blue-700 inline-flex text-white  py-2 px-6 rounded-lg text-sm">
            New Course
          </button>
        </Link>
      </div>
      <p className="text-center mt-12 text-gray-500">
        create a new course if you don't have a course yet
      </p>
    </div>
  );
}

export default AllCourse;
