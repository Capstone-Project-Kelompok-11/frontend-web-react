import React, { useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getRequest } from "../../utils/fetcherMethod";
import ChapterCard from "../../components/organism/ChapterCard";
import UserProfileThumbnailCard from "../../components/organism/UserProfileThumbnailCard";
import Modal from "../../components/molecules/Modal/Modal.molecul";
import useSWR from "swr";

function ReportingSummary() {
  const { detail_user } = useParams();
  const { data: rawData, isLoading } = useSWR(
    `/api/v1/admin/course/resumes?size=50&page=1`,
    getRequest
  );
  const [isOpen, setIsOpen] = useState(false);
  const [finalScore, setFinalScore] = useState("");
  const [isFillFinalScore, setIsFillFinalScore] = useState(!finalScore);
  const { state } = useLocation();
  let finalData;

  const thumbnailCourseContent = [
    {
      title: "Name",
      content: detail_user,
    },
    {
      title: "Email",
      content: state.user.email,
    },
    {
      title: "Phone",
      content: state.user.phone,
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

  if (!isLoading) {
    finalData = rawData?.data?.find(
      (item) => item.user.email === state.user.email
    );
  }

  return (
    <section className="flex flex-col gap-5 me-8 min-h-screen">
      <p className="text-3xl">{detail_user}</p>

      <section className="relative p-10 rounded-2xl bg-light-blue-10 h-48">
        <UserProfileThumbnailCard
          data={thumbnailCourseContent}
          avatar={state.user.image}
        />

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <section className="flex flex-col gap-20 float-right w-[65%]">
            <section className="flex flex-col gap-3">
              <h2 className="font-bold text-3xl">Summary All Material</h2>

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

            <section className="flex flex-col gap-2">
              <h3 className="font-medium text-xl">Nilai Chapter</h3>

              <section className="h-96 overflow-y-auto mb-4">
                <section className="flex flex-col gap-3 px-2 py-3">
                  {finalData?.report?.modules?.length
                    ? finalData.report.modules.map(({ module, score }) => (
                        <ChapterCard
                          score={score}
                          key={module.id}
                          name={module.name}
                          isReporting
                        />
                      ))
                    : state.course_modules.map((item) => (
                        <ChapterCard key={item.id} {...item} isReporting />
                      ))}
                </section>
              </section>
            </section>
          </section>
        )}
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
