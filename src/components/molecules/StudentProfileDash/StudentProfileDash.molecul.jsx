import React from "react";
import StudentIcon from "../../atoms/Icons/StudentIcon.atom";

function StudentProfileDash({ newStudent }) {
  return (
    <div className="inline-flex flex-col p-2 mx-3 font-bold rounded-xl text-white w-56 bg-blue-700 ">
      <div className="flex px-2 my-2 justify-between">
        <h1 className="pb-4 text-2xl">Student</h1>
        <div className=" rounded-full h-8 my-2 p-1 bg-white bg-opacity-30"><StudentIcon /></div>
      </div>
      <p className="text-3xl px-4 py-2">{newStudent}</p>
    </div>
  );
}

export default StudentProfileDash;
