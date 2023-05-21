import React from "react";
import { listRating } from "./dummyData";
import RatingsStars from "../../atoms/Rating/Rating.atom";
import VerticalEllipsesIcon from "../../atoms/Icons/VerticalEllipsesIcon.atom";

function RatingCourse() {
  return (
    <div className="bg-light-blue/20 rounded-xl drop-shadow-lg shadow-lg">
      <div className="p-5">
        <h1 className="font-bold ">Rating Course</h1>
        {listRating.map((list) => (
          <>
            <div className="flex justify-between py-2 px-2">
              <img
                src={list.imageURL}
                alt=""
                className="h-8 w-8 rounded-full inline-flex "
              />
              <p className="px-4 flex flex-1 text-base items-center">
                {list.name}
              </p>
              <div className="rating rating-sm flex flex-row justify-between">
                <RatingsStars />
                <p className="text-sm flex pr-10 mx-5">{list.rating}</p>
                <VerticalEllipsesIcon />
              </div>
            </div>

            <p className="opacity-60 text-xs py-2 border-black border-b">
              “{list.comment}”
            </p>
          </>
        ))}
      </div>
    </div>
  );
}

export default RatingCourse;
