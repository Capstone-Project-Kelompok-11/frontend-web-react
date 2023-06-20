import React, { useState, useMemo } from "react";
import { useFormik } from "formik";
import { storage } from "../../../config/firebase/firebase";
import { getDownloadURL } from "firebase/storage";
import {
  initCreateNewChapterValue,
  validationCreateNewChapter,
} from "./constant";
import ArrowPathIcon from "../../atoms/Icons/ArrowPathIcon.atom";
import { useNavigate } from "react-router-dom";
import { handleUploadVIdeo } from "../../../utils/hooks/uploadVideo";
import { toast } from "react-toastify";

const NewChapterForm = ({ createNewChapter, id, data = {} }) => {
  const navigate = useNavigate();
  const initData = useMemo(
    () => (createNewChapter ? initCreateNewChapterValue : data),
    []
  );
  const [file, setFile] = useState("");
  const formik = useFormik({
    initialValues: initData,
    validationSchema: validationCreateNewChapter,
    onSubmit: (values) => {
      handleUpload(values);
    },
  });
  const handleRefresh = () => {
    formik.resetForm();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleUpload = (values) => {
    if (file == null) return;
    const fileRef = storage
      .ref("/videos/" + file.name)
      .put(file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then(async (downloadURL) => {
            try {
              const link_url = await downloadURL;
              await handleUploadVIdeo({
                createNewChapter,
                values,
                id,
                data,
                link_url,
              });
              toast.dismiss();
              toast.success(`Succesfully Create Module`);
              formik.resetForm();
              navigate(`/course/${data.id_course || id}`);
            } catch (error) {
              console.log(error);
            }
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
          });
      });
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-8 flex items-center">
        <p className="text-2xl">New Chapter</p>
        <div
          className="ml-2 transform-origin-center cursor-pointer"
          onClick={handleRefresh}
        >
          <ArrowPathIcon />
        </div>
      </div>
      <div className="w-full flex flex-row gap-6">
        <div className="w-full mr-10">
          <div className="mb-2">
            <label htmlFor="chapterName">
              <div className="flex items-center">
                <p className="font-semibold">Chapter Name</p>
                <span className="text-red-500 font-semibold">*</span>
              </div>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoFocus
              className="w-full h-12 mt-3 bg-gray-200 p-5 rounded-lg border border-gray-500"
              placeholder="e.g. “Capstone Project 11”"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row gap-6">
        <div className="mb-4">
          <label htmlFor="chapterDes">
            <div className="flex items-center">
              <label className="font-semibold">Chapter Description</label>
              <span className="text-red-500 font-semibold">*</span>
            </div>
          </label>
          <textarea
            id="description"
            name="description"
            className="resize-y w-[701px] h-[390px] mt-3 bg-gray-200 p-5 rounded-lg border border-gray-500"
            placeholder="Type here..."
            rows="5"
            value={formik.values.description}
            onChange={formik.handleChange}
          ></textarea>
        </div>
        <div className="w-80 mr-8">
          <div className="mb-2 flex items-center">
            <p className="font-semibold">Uploaded Videos</p>
          </div>
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
            <div className="image-container">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-5">
                    <span className="text-center text-gray-500 truncate ... w-36">
                      {file ? file.name : data.video || "Link"}
                    </span>
                  </div>
                  <input
                    id="video"
                    type="file"
                    value={formik.values.video && ""}
                    onChange={handleFileChange}
                    className="absolute w-48 h-10 overflow-hidden opacity-0"
                    accept="video/*"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex font-semibold mt-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="justify-start bg-warning-10 hover:bg-warning-30 text-black py-2 px-6 rounded-lg text-sm fw-bold"
        >
          Back
        </button>
        <button
          onClick={handleUpload}
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
