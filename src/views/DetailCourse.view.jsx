import React from "react";
import { useParams } from "react-router-dom";
import { transformDate } from "../utils/helperMethod";
import PlusIcon from "../components/atoms/Icons/PlusIcon.atom";
import ChapterCard from "../components/organism/ChapterCard";
import CourseThumbnailCard from "../components/organism/CourseThumbnailCard";

function DetailCourseView() {
  const { id } = useParams();
  // TODO: fetch data by id

  const chapterData = [
    "Pengenalan tentang Desain Antarmuka Pengguna 1",
    "Desain Visual 1",
    "Pendalaman tentang Desain Antarmuka Pengguna 2",
    "Pengenalan tentang Desain Antarmuka Pengguna 3",
    "Desain Visual 2",
    "Pendalaman tentang Desain Antarmuka Pengguna 4",
    "Pengenalan tentang Desain Antarmuka Pengguna 5",
    "Desain Visual 3",
    "Pendalaman tentang Desain Antarmuka Pengguna 6",
    "Pengenalan tentang Desain Antarmuka Pengguna 7",
    "Desain Visual 4",
    "Pendalaman tentang Desain Antarmuka Pengguna 8",
  ];

  const thumbnailCourseContent = [
    {
      title: "Responsible",
      content: "Gabriel",
    },
    {
      title: "Last Update",
      content: transformDate(new Date("2023-10-20T12:00:00Z"), "short"),
    },
    {
      title: "Members",
      content: "10",
    },
    {
      title: "Price",
      content: "300.000",
    },
    {
      title: "Level",
      content: "Beginner",
    },
  ];

  return (
    <section className="flex flex-col gap-5 me-8 min-h-screen">
      <p className="text-xl">My Course {id}</p>

      <section className="relative p-10 rounded-2xl bg-warning-10">
        <CourseThumbnailCard data={thumbnailCourseContent} />

        <section className="flex flex-col gap-3 float-right w-[70%]">
          <h2 className="font-bold text-3xl">UI Design</h2>
          <p className="text-sm">
            User interface design (UI design) is an important part of developing
            effective digital products. UI design involves designing an
            easy-to-use and attractive user interface, and paying attention to
            aspects such as navigation, layout, interaction and visual
            aesthetics.
          </p>
        </section>
      </section>

      <section className="relative flex flex-col gap-3 justify-end ml-80">
        <section className="flex justify-between">
          <h3 className="font-bold text-2xl">Chapter</h3>
          <PlusIcon
            width={30}
            height={30}
            onClick={() => alert("Plus icon has been clicked!")}
          />
        </section>

        <section className="h-96 overflow-y-auto">
          <section className="flex flex-col gap-3 px-2 py-3">
            {chapterData.length ? (
              chapterData.map((item) => <ChapterCard title={item} key={item} />)
            ) : (
              <p className="text-light-90 text-center">
                Create a new chapter if there is no material chapter
              </p>
            )}
          </section>
        </section>
      </section>
    </section>
  );
}

export default DetailCourseView;
