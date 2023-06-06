import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { dummyData } from "../Course/dummy";
import ChapterCard from "../../components/organism/ChapterCard";
import UserProfileThumbnailCard from "../../components/organism/UserProfileThumbnailCard";
import Modal from "../../components/molecules/Modal/Modal.molecul";

function ReportingSummary() {
  const { detail_user } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [finalScore, setFinalScore] = useState("");
  const [isFillFinalScore, setIsFillFinalScore] = useState(!finalScore);

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

  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (finalScore) {
      setIsOpen(true);
    }
  };

  const handleGiveFinalScore = () => {
    setIsFillFinalScore(false);
    closeModal();
  };

  return (
    <section className="flex flex-col gap-5 me-8 min-h-screen">
      <p className="text-3xl">{detail_user}</p>

      <section className="relative p-10 rounded-2xl bg-light-blue-10 h-48">
        <UserProfileThumbnailCard data={thumbnailCourseContent} />

        <section className="flex flex-col gap-20 float-right w-[65%]">
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

              {isFillFinalScore ? (
                <form onSubmit={(e) => handleSubmit(e)} className="flex gap-3">
                  <section className="flex gap-3 items-center">
                    <label htmlFor="nilai">Input Nilai</label>
                    <input
                      type="number"
                      name="nilai"
                      id="nilai"
                      placeholder="00"
                      min="0"
                      max="100"
                      value={finalScore}
                      onChange={(e) => setFinalScore(e.target.value)}
                      className="p-2 py-1 outline-none rounded-md border-2 border-secondary-10 w-12 text-center placeholder:text-center"
                    />
                  </section>

                  <button
                    type="submit"
                    className="bg-primary-50 hover:bg-primary-70 duration-500 rounded-lg p-2 py-1 text-white"
                  >
                    save
                  </button>
                </form>
              ) : (
                <section className="flex gap-3 items-center font-semibold">
                  <h3>Nilai Akhir</h3>
                  <p className="border-2 border-secondary-10 text-success-30 rounded-md p-2 py-1">
                    {finalScore}
                  </p>
                </section>
              )}
            </section>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-medium text-xl">Nilai Chapter</h3>

            <section className="h-96 overflow-y-auto mb-4">
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

      <Modal
        isOpen={isOpen}
        header="Save Confirmation"
        primaryButtonName="Save"
        handleSecondary={closeModal}
        handlePrimary={handleGiveFinalScore}
        btnPrimaryClassName="bg-primary-70 hover:bg-primary-90"
      >
        <section className="mt-2 text-sm text-gray-500">
          <p>Are you sure want to save this final score?</p>
          <p>If you click Save, you can not edit it!</p>
        </section>
      </Modal>
    </section>
  );
}

export default ReportingSummary;
