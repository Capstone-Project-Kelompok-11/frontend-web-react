import React from "react";
import { listRating } from "./dummyData";
import RatingCourseCard from "../RatingCourseCard/RatingCourseCard.organism";

function RatingCourse() {
  return (
    <div className="bg-light-blue/20 rounded-xl drop-shadow-lg shadow-lg -mr-2">
      <div className="p-4">
        <h1 className="font-bold pb-6">Rating Course</h1>
        {listRating.map((list) => (
          <RatingCourseCard key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
}

export default RatingCourse;
