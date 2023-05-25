import React from "react";
import RatingsStars from "../../atoms/Rating/Rating.atom";
import VerticalEllipsesIcon from "../../atoms/Icons/VerticalEllipsesIcon.atom";

function RatingCourseCard({ list }) {
  return (
    <div>
      <div className="flex justify-between p-2">
        <img
          src={list.imageURL}
          alt=""
          className="h-8 w-8 rounded-full inline-flex mt-1"
        />
        <p className="px-4 flex flex-1 text-base items-center">{list.name}</p>
        <div className="rating rating-sm flex flex-row justify-between">
          <RatingsStars />
          <p className="text-sm flex pr-10 mx-5">{list.rating}</p>
          <VerticalEllipsesIcon />
        </div>
      </div>
      <p className="text-gray-400 text-xs pb-6 px-2 border-black border-b">
        “{list.comment}”
      </p>
    </div>
  );
}

export default RatingCourseCard;
