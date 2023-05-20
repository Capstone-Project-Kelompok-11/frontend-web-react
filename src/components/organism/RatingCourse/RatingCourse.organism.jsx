import React from "react";
import { listRating } from "./dummyData";

function RatingCourse() {
  return (
    <div className="bg-blue-50 rounded-xl drop-shadow-lg shadow-lg">
      <div className="p-5">
        <h1 className="font-bold ">Rating Course</h1>
        {listRating.map((list) => (
          <>
            <div className="flex py-2 px-2">
              <img
                src={list.imageURL}
                alt=""
                className="h-8 w-8 rounded-full inline-flex "
              />
              <p className="px-4 text-base">{list.name}</p>
            </div>
            <p className="opacity-60 text-xs py-1 border-black border-b">
              “{list.comment}”
            </p>
          </>
        ))}
      </div>
    </div>
  );
}

export default RatingCourse;
