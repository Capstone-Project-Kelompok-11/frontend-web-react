import React, { useMemo } from "react";
import { useFormik } from "formik";
import {
  initCreateNewChapterValue,
  validationCreateNewChapter,
} from "./constant";
import { Link } from "react-router-dom";
import UploadFileIcon from "../../atoms/Icons/UploadFileIcon.atom";
import CreateQuizIcon from "../../atoms/Icons/CreateQuizIcon.atom";
import CameraIcon from "../../atoms/Icons/CameraIcon.atom";
import ArrowPathIcon from "../../atoms/Icons/ArrowPathIcon.atom";
import ArrowLinkIcon from "../../atoms/Icons/ArrowLinkIcon.atom";

const NewChapterForm = ({ createNewChapter, data = {} }) => {
  const initData = useMemo(() =>
    createNewChapter ? initCreateNewChapterValue : data
  );
  const formik = useFormik({
    initialValues: initData,
    validationSchema: validationCreateNewChapter,
    onSubmit: (values) => {
      if (values) {
        console.log(values);
        formik.resetForm();
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-8 flex items-center">
        <p className="text-2xl">New Chapter</p>

        <div className="ml-2 transform-origin-center cursor-pointer hover:animate-spin">
          <ArrowPathIcon />
        </div>
      </div>

      <div className="w-full flex flex-row gap-6">
        <div className="w-96">
          <div className="mb-3 flex items-center">
            <p className="font-semibold">Chapter Thumbnail</p>
          </div>
          <div className="w-full h-270 bg-gray-200 flex items-center  rounded-xl justify-center rounded-10">
            <div className="image-container">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <CameraIcon />
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 mr-10">
          <div className="mb-2">
            <label htmlFor="chapterName">
              <div className="flex items-center">
                <p className="font-semibold">Chapter Name</p>
                <span className="text-red-500 font-semibold">*</span>
              </div>
            </label>
            <input
              id="chapterName"
              name="chapterName"
              type="text"
              autoFocus
              className="w-full h-12 mt-3 bg-gray-200 p-5 rounded-lg border border-gray-500"
              placeholder="e.g. “Capstone Project 11”"
              value={formik.values.chapterName}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="chapterDes">
              <div className="flex items-center">
                <label className="font-semibold">Chapter Description</label>
                <span className="text-red-500 font-semibold">*</span>
              </div>
            </label>
            <textarea
              id="chapterDes"
              name="chapterDes"
              className="resize-y w-full h-40 mt-3 bg-gray-200 p-5 rounded-lg border border-gray-500"
              placeholder="Type here..."
              rows="5"
              value={formik.values.chapterDes}
              onChange={formik.handleChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row gap-6">
        <div className="w-80">
          <div className="mb-2 flex items-center">
            <p className="font-semibold">Task Quiz</p>
          </div>
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadFileIcon />
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <Link to="/course/:id_course/chapter/new_quiz">
          <div className="w-80 mt-8">
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <CreateQuizIcon />
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="w-80 mr-8">
          <div className="mb-2  flex items-center">
            <p className="font-semibold">Uploaded Videos</p>
          </div>
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
            <div className="image-container">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <ArrowLinkIcon />
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex font-semibold mt-6">
        <button className="justify-start  bg-warning-10 hover:bg-warning-30 text-black py-2 px-6 rounded-lg text-sm fw-bold">
          Back
        </button>
        <button
          type="submit"
          className="justify-end ml-auto mr-8 bg-warning-10 hover:bg-warning-30 text-black py-2 px-6 rounded-lg text-sm"
        >
          Upload
        </button>
      </div>
    </form>
  );
};

export default NewChapterForm;
