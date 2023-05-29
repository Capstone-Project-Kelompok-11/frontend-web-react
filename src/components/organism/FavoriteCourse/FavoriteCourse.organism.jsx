import React from "react";
import RatingStars from "../../atoms/Rating/Rating.atom";
import { favCourse } from "./dummyCourse";

function FavoriteCourse() {
  return (
    <section className="flex flex-col gap-3 drop-shadow-lg shadow-lg rounded-2xl w-3/12 p-5 bg-light-blue/20">
      <h1 className="font-bold text-xl">Favorite Course</h1>

      {favCourse.map((item) => (
        <section
          key={item.id}
          className="bg-white p-4 rounded-2xl border-2 border-secondary-10"
        >
          <article className="flex justify-between gap-3">
            <h2 className="font-bold text-lg">{item.courseTitle}</h2>
            <section className="rating rating-sm flex items-center">
              <RatingStars />
              <p className="ps-2 text-sm">{item.ratings}</p>
            </section>
          </article>

          <section className="text-sm text-center py-1">
            Attendees : {item.attendees}
          </section>
        </section>
      ))}
    </section>
  );
}

export default FavoriteCourse;
