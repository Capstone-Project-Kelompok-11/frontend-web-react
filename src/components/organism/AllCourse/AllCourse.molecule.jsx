import React from "react";

import { Link } from "react-router-dom";

function AllCourse() {
  return (
    <div className="text-center">
      <div className="flex items-center gap-4">
        <p className="text-2xl">All Course</p>
        <Link to="/course/newCourse">
          <button class="bg-blue-500 hover:bg-blue-700 inline-flex text-white  py-2 px-6 rounded-lg text-sm">
            New Course
          </button>
        </Link>
      </div>
      <p className="text-center mt-12">
        Create a New Course if You Don't Have a Course Yet
      </p>
    </div>
  );
}

export default AllCourse;
