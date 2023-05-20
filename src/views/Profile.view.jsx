import React from "react";
import MyCourse from "../components/organism/MyCourse/MyCourse.organism";
import RatingCourse from "../components/organism/RatingCourse/RatingCourse.organism";
import HeaderProfile from "../components/organism/ListProfile/ListProfile.molecul";

function ContentProfile() {
  return (
    <div className="py-4 ">
      <HeaderProfile />
      <div className="grid grid-cols-2 gap-10 px-2 py-6 mr-4">
        <div>
          <MyCourse />
        </div>
        <RatingCourse />
      </div>
    </div>
  );
}

export default ContentProfile;
