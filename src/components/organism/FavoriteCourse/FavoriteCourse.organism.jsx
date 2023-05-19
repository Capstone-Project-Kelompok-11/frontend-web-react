import React from "react";
import RatingStars from "../../atoms/Rating/Rating.atom";
import { dummyCourse } from "./dummyCourse";

function FavoriteCourse() {
  const favcourse = dummyCourse;
  return (
    <section className="flex flex-col gap-3 drop-shadow-lg shadow-lg rounded-2xl w-3/12 p-5 bg-light-blue/20">
      <h1 className="font-bold text-xl">Favorite Course</h1>
      {favcourse.map((item) => (
        <div
          key={item.id}
          className="bg-white p-5 rounded-2xl border-2 border-secondary-10"
        >
          <div className="flex justify-between ps-2">
            <h2 className="font-bold text-lg">{item.courseTitle}</h2>
            <div className="rating rating-sm flex items-center pe-7">
              <RatingStars />
              <p className="ps-2 text-sm">{item.ratings}</p>
            </div>
          </div>
          <div className="ps-6 text-sm py-1">Attendees : {item.attendees}</div>
        </div>
      ))}
    </section>
  );
}

export default FavoriteCourse;
