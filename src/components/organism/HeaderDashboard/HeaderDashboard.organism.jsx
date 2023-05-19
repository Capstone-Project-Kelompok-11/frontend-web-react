import React from "react";
import NewStudentDash from "../../molecules/NewStudentDash/NewStudentDash.molecule";
import StudentDash from "../../molecules/StudentDash/StudentDash.molecule";
import CourseDash from "../../molecules/CourseDash/CourseDash.molecule";
import GraduateDash from "../../molecules/GraduateDash/GraduateDash.molecule";

function HeaderDashboard() {
  return (
    <section className="grid grid-cols-4 gap-3 py-6 drop-shadow-lg shadow-lg rounded-2xl w-12/12 bg-light-blue/20 ">
      <NewStudentDash NewStudentStatus={10} />
      <StudentDash StudentStatus={35} />
      <CourseDash CourseStatus={8} />
      <GraduateDash GraduateStatus={12} />
    </section>
  );
}

export default HeaderDashboard;
