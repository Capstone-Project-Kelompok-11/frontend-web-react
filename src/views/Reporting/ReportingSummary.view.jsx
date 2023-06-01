import React from "react";
import { useParams, Link } from "react-router-dom";
import ChapterCard from "../../components/organism/ChapterCard";
import UserProfileThumbnailCard from "../../components/organism/UserProfileThumbnailCard";
import { dummyData } from "../Course/dummy";

function ReportingSummary() {
  const { detail_user } = useParams();

  const thumbnailCourseContent = [
    {
      title: "Name",
      content: detail_user,
    },
    {
      title: "Email",
      content: "nandadepeel@gmail.com",
    },
    {
      title: "Phone",
      content: "+6285700871372",
    },
  ];

  const handleSubmit = () => {};

  return (
    <section className="flex flex-col gap-5 me-8 min-h-screen">
      <p className="text-3xl">{detail_user}</p>

      <section className="relative p-10 rounded-2xl bg-light-blue-10 h-48">
        <UserProfileThumbnailCard data={thumbnailCourseContent} />

        <section className="flex flex-col gap-20 float-right w-[68%]">
          <section className="flex flex-col gap-3">
            <h2 className="font-bold text-3xl">Summary All Material</h2>

            <section className="flex justify-between items-center">
              <Link
                to="/myfile.pdf"
                target="_blank"
                download
                className=" bg-danger-10 hover:bg-danger-30 duration-500 p-4 py-2 rounded-lg font-semibold"
              >
                Download
              </Link>

              <form onSubmit={handleSubmit} className="flex gap-3 items-center">
                <label htmlFor="nilai">Input Nilai</label>
                <input
                  type="number"
                  name="nilai"
                  id="nilai"
                  placeholder="00"
                  min="0"
                  max="100"
                  className="p-2 outline-none rounded-md border-2 border-secondary-10 w-12 text-center placeholder:text-center"
                />
              </form>
            </section>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-medium text-xl">Nilai Chapter</h3>

            <section className="h-96 overflow-y-auto">
              <section className="flex flex-col gap-3 px-2 py-3">
                {dummyData.length ? (
                  dummyData.map((item) => (
                    <ChapterCard {...item} key={item.id} isReporting />
                  ))
                ) : (
                  <p className="text-light-90 text-center">
                    There is no material chapter
                  </p>
                )}
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ReportingSummary;
