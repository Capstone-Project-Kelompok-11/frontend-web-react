import React from "react";
import ListMyCourse from "../../molecules/ListMyCourse/ListMyCourse.molecul";
import { listMyCourse } from "./dummyData";

function MyCourse() {
  return (
    <div className="bg-light-blue/20 p-6 rounded-xl drop-shadow-lg shadow-lg">
      <h1 className="font-bold text-base">My Course</h1>
      {listMyCourse.map((course) => (
        <ListMyCourse course={course} />
      ))}
      <div>
        <a href="/profile" className="flex justify-end text-sm text-primary-50">
          Lainnya
        </a>
      </div>
    </div>
  );
}

export default MyCourse;
