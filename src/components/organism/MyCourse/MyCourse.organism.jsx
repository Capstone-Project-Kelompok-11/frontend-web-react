import React from "react";
import ListMyCourse from "../../molecules/ListMyCourse/ListMyCourse.molecul";

function MyCourse() {
  const listMyCourse = [
    {
      courseName: "UI Design",
      coursePrice: 30000,
      totalMaterial: 5,
      totalCourse: 5,
    },
    {
        courseName: "UI Design",
        coursePrice: 30000,
        totalMaterial: 5,
        totalCourse: 5,
      }, {
        courseName: "UI Design",
        coursePrice: 30000,
        totalMaterial: 5,
        totalCourse: 5,
      },
  ];
  return (
    <div className="bg-blue-50 p-6 rounded-xl drop-shadow-lg shadow-lg">
      <h1 className="font-bold text-base">My Course</h1>
      {listMyCourse.map((course) => (
       <ListMyCourse course={course} />
      ))}
      <div>
        <a href="/profile" className="flex justify-end text-sm text-blue-500">Lainnya</a>
      </div>
    </div>
  );
}

export default MyCourse;
