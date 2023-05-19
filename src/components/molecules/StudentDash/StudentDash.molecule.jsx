import React from "react";
import StudentIcon from "../../atoms/Icons/StudentIconDash.atom";

function StudentDash({StudentStatus}) {
  return (
    <div className="border-x-2 border-gray-600 ps-12 pt-8">
      <div className="flex items-center ps-7">
        <div className="bg-success-30 p-3 rounded-xl">
          <StudentIcon />
        </div>
        <div className="flex flex-col ps-5 ">
          <p>Student</p>
          <h1 className="font-bold text-3xl">{StudentStatus}</h1>
        </div>
      </div>
    </div>
  );
}

export default StudentDash;
