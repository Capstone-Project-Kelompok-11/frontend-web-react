import React from "react";
import DetailCardInfo from "../../molecules/DetailCardInfo";
import courseThumbnail from "../../../assets/courseThumbnail.svg";

function CourseThumbnailCard({ data }) {
  return (
    <section className="absolute flex flex-col gap-3 w-full bg-white h-[500px] rounded-t-2xl">
      <img src={courseThumbnail} alt="course thumbnail" />

      <section className="flex flex-col gap-5 p-3 pb-10 rounded-2xl shadow-lg">
        {data.map((item) => (
          <DetailCardInfo key={item.title} {...item} fromCourse />
        ))}
      </section>
    </section>
  );
}

export default CourseThumbnailCard;
