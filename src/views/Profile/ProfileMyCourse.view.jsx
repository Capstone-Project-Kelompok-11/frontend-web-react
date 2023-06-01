import React from "react";
import ListCourse from "../../components/organism/ListCourse/ListCourse.organism";

function ProfileMyCourse() {
  return (
    <div>
      <h1 className="text-lg py-4">My Course</h1>
      <div className="h-[32rem] mx-2 overflow-y-auto">
        <ListCourse />
      </div>
    </div>
  );
}

export default ProfileMyCourse;
