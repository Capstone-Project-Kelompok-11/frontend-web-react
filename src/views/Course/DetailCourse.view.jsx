import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyData, thumbnailCourseContent } from "./dummy";
import PlusIcon from "../../components/atoms/Icons/PlusIcon.atom";
import ChapterCard from "../../components/organism/ChapterCard";
import CourseThumbnailCard from "../../components/organism/CourseThumbnailCard";

function DetailCourseView() {
  const { id: id_course } = useParams();
  const navigate = useNavigate();
  // TODO: fetch data by id

  const handleAddChapter = () => {
    navigate(`/course/${id_course}/new-chapter`, {
      state: { createNewChapter: true },
    });
  };

  const handleChapterClick = (id_chapter) => {
    navigate(`/course/${id_course}/chapter/${id_chapter}`);
  };

  return (
    <section className="flex flex-col gap-5 me-8 min-h-screen">
      <p className="text-xl">My Course {id_course}</p>

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
          <PlusIcon width={30} height={30} onClick={handleAddChapter} />
        </section>

        <section className="h-96 overflow-y-auto">
          <section className="flex flex-col gap-3 px-2 py-3">
            {dummyData.length ? (
              dummyData.map((item) => (
                <ChapterCard
                  {...item}
                  key={item.id}
                  courseId={id_course}
                  onClick={() => handleChapterClick(item.id)}
                />
              ))
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
