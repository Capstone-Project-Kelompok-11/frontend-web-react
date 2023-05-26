import React from "react";
import MyCourse from "../components/organism/MyCourse/MyCourse.organism";
import RatingCourse from "../components/organism/RatingCourse/RatingCourse.organism";
import HeaderProfile from "../components/organism/HeaderProfile/HeaderProfile.molecul";
import Calendar from "../components/organism/Calender/Calender.organism";
import TodaysEvent from "../components/organism/TodaysEvent/TodaysEvent.organism";

function ContentProfile() {
  return (
    <div className="py-4 mr-4">
      <HeaderProfile />
      <div className="grid grid-cols-2 gap-8 px-2 py-6 mr-4">
        <div>
          <MyCourse />
        </div>
        <RatingCourse />
      </div>
      <div className="grid grid-cols-4 absolute bottom-0 pb-10 px-2 gap-4 mr-10 ">
        <Calendar />
        <TodaysEvent />
      </div>
    </div>
  );
}

export default ContentProfile;
