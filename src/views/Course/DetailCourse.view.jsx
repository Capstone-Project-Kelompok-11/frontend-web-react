import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyData, thumbnailCourseContent } from "./dummy";
import PlusIcon from "../../components/atoms/Icons/PlusIcon.atom";
import ChapterCard from "../../components/organism/ChapterCard";
import CourseThumbnailCard from "../../components/organism/CourseThumbnailCard";

function DetailCourseView() {
  const { id } = useParams();
  const navigate = useNavigate();
  // TODO: fetch data by id

  const handleAddChapter = () => {
    navigate(`/course/${id}/new-chapter`, {
      state: { createNewChapter: true },
    });
  };

  return (
    <section className="flex flex-col gap-5 me-8 min-h-screen">
      <p className="text-xl">My Course {id}</p>

      <section className="relative p-10 rounded-2xl bg-warning-10 h-48">
        <CourseThumbnailCard data={thumbnailCourseContent} />

        <section className="flex flex-col gap-20 float-right w-[70%]">
          <section>
            <h2 className="font-bold text-3xl">UI Design</h2>
            <p className="text-sm">
              User interface design (UI design) is an important part of
              developing effective digital products. UI design involves
              designing an easy-to-use and attractive user interface, and paying
              attention to aspects such as navigation, layout, interaction and
              visual aesthetics.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <section className="flex justify-between">
              <h3 className="font-bold text-2xl">Chapter</h3>
              <PlusIcon width={30} height={30} onClick={handleAddChapter} />
            </section>

            <section className="h-96 overflow-y-auto">
              <section className="flex flex-col gap-3 px-2 py-3">
                {dummyData.length ? (
                  dummyData.map((item) => (
                    <ChapterCard {...item} key={item.id} courseId={id} />
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
      </section>
    </section>
  );
}

export default DetailCourseView;
