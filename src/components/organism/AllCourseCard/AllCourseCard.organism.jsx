import React from "react";
import { Link } from "react-router-dom";
import ThreeDotIcon from "../../atoms/Icons/ThreeDotIcon";
import { getRandomBorderColor } from "../../../utils/helperMethod";

function AllCourseCard({ name, category, attendees, views }) {
  const randomColorBorder = getRandomBorderColor();

  return (
    <div
      className={`p-5 rounded-xl border-l-4 ${randomColorBorder} shadow-lg `}
    >
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">{name}</h1>
        <ThreeDotIcon width={5} />
      </div>
      <div className="flex flex-row gap-2 py-4 pb-14">
        <h1>Category :</h1>
        <p className="font-bold">{category}</p>
      </div>
      <div className="gap-5 flex items-start justify-start border-r">
        <div className="mx-1 text-center">
          <p>{attendees}</p>
          <p>Attendees</p>
        </div>
        <div className="px-10 mx-6 text-center border-l border-black">
          <p>{views} </p>
          <p>views</p>
        </div>
        <div className="flex ml-auto">
          <Link to="/" className="bg-success-10 p-2 rounded-lg px-4  ">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AllCourseCard;
