import React from "react";
import { useParams, Link } from "react-router-dom";
import ChapterCard from "../../components/organism/ChapterCard";
import UserProfileThumbnailCard from "../../components/organism/UserProfileThumbnailCard";

function ReportingSummary() {
  const { detail_user } = useParams();

  const chapterData = [
    {
      title: "Pengenalan tentang Desain Antarmuka Pengguna 1",
      score: 90,
    },
    {
      title: "Desain Visual 1",
      score: 60,
    },
    {
      title: "Pengenalan tentang Desain Antarmuka Pengguna 2",
      score: 75,
    },
    {
      title: "Desain Visual 2",
      score: 80,
    },
    {
      title: "Pengenalan tentang Desain Antarmuka Pengguna 3",
      score: 95,
    },
    {
      title: "Desain Visual 3",
      score: 100,
    },
    {
      title: "Pengenalan tentang Desain Antarmuka Pengguna 4",
      score: 100,
    },
  ];

  const thumbnailCourseContent = [
    {
      title: "Name",
      content: "Dhewanda Putro Laksono Alexander",
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

      <section className="relative p-10 rounded-2xl bg-light-blue-10">
        <UserProfileThumbnailCard data={thumbnailCourseContent} />

        <section className="flex flex-col gap-3 float-right w-[65%]">
          <h2 className="font-bold text-3xl">Summary All Material</h2>
          <section className="flex justify-between items-center">
            <button className=" bg-danger-10 p-4 py-2 rounded-lg font-semibold">
              <Link to="/myfile.pdf" target="_blank" download>
                Download
              </Link>
            </button>

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
      </section>

      <section className="relative flex flex-col gap-2 justify-end ml-[23rem]">
        <h3 className="font-medium text-xl">Nilai Chapter</h3>

        <section className="h-96 overflow-y-auto">
          <section className="flex flex-col gap-3 px-2 py-3">
            {chapterData.length ? (
              chapterData.map((item) => (
                <ChapterCard {...item} key={item} isReporting />
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
  );
}

export default ReportingSummary;
