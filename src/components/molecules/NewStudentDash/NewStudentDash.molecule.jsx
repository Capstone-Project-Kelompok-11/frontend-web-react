import React from "react";
import newStudent from "../../../assets/NewStudent.svg";

function NewStudentDash({NewStudentStatus}) {
  return (
    <div className="flex items-center ps-12 py-6">
      <div className="px-4 ">
        <img src={newStudent} alt="NewStudent" />
      </div>
      <div className="flex flex-col ps-5">
        <p>New Student</p>
        <h1 className="font-bold text-3xl">{NewStudentStatus}</h1>
      </div>
    </div>
  );
}

export default NewStudentDash;
