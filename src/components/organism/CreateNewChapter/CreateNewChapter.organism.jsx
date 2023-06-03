import React, { useState } from "react";
import ArrowPath from "../../atoms/Icons/ArrowPath.atom";
import Camera from "../../atoms/Icons/camera.atom";
import { useFormik } from "formik";
import UploadFile from "../../atoms/Icons/UploadFile.atom";
import CreateQuiz from "../../atoms/Icons/CreateQuiz.atom";
import ValidationProduct from "../../molecules/ValidationProductChapter/ValidationProduct.molecule";
import { Link } from "react-router-dom";
import ArrowLink from "../../atoms/Icons/ArrowLink.atom";

const InfoAllCourse = () => {
  const [files, setFile] = useState();
  const [url, setUrl] = useState();

  const handleChange = (event) => {
    setFile(event.target.files);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  function handleUpload() {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append(`images[${i}]`, files[0]);
    }
    formData.append("url", url);
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  const formik = useFormik({
    initialValues: {
      courseName: "",
      createDes: "",
    },
    validationSchema: ValidationProduct,
    onSubmit: (values) => {
      console.log(values);
      alert("Succes");
      formik.resetForm();
    },
  });
  console.log(formik.values);

  return (
    <div className="all-course-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-8 flex items-center">
          <p className="text-2xl">New Chapter</p>

          <div className="ml-2 transform-origin-center cursor-pointer hover:animate-spin">
            <ArrowPath />
          </div>
        </div>

        <div className="w-full flex flex-row gap-6">
          <div className="w-96">
            <div className="mb-3 flex items-center">
              <p className="font-bold">Course Thumbnail</p>
            </div>
            <div className="w-full h-270 bg-gray-200 flex items-center  rounded-xl justify-center rounded-10">
              <div className="image-container">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 "
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Camera />
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-5/6 mr-10 ">
            <div className=" mb-2 ">
              <label htmlFor="courseName ">
                <div className="flex items-center">
                  <p className=" font-semibold">Course Name</p>
                  <span className="text-red-500">*</span>
                </div>
              </label>
              <input
                type="text"
                id="courseName"
                value={formik.values.courseName}
                onChange={formik.handleChange}
                name="courseName"
                className="w-full h-12 mt-3 bg-gray-200 p-5  rounded-lg border border-gray-500"
                placeholder="e.g. “Capstone Project 11”"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="createDes">
                <div className="flex items-center">
                  <label className=" font-bold">Create Description</label>
                  <span className="text-red-500">*</span>
                </div>
              </label>
              <textarea
                name="createDes"
                id="createDes"
                value={formik.values.createDes}
                onChange={formik.handleChange}
                className="resize-y w-full h-40 mt-3 bg-gray-200 p-5 rounded-lg border border-gray-500"
                placeholder="Type here..."
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-6">
          <div className="w-80 ">
            <div className="mb-2 flex items-center">
              <p className="font-bold">Task Quiz</p>
            </div>
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 "
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadFile />
                    </div>
                    <input
                      type="file"
                      multiple
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <Link to="/course/:id_course/chapter/new_quiz">
            <div className="w-80 mt-8 ">
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <CreateQuiz />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="w-80 mr-8">
            <div className="mb-2  flex items-center">
              <p className="font-bold">Uploaded Videos</p>
            </div>
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
              <div className="image-container">
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-64 ">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <ArrowLink />
                    </div>
                    <input type="text" value={url} onChange={handleUrlChange} />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex font-bold mt-6">
          <button className="justify-start  bg-warning-10 text-black py-2 px-6 rounded-lg text-sm fw-bold">
            Back
          </button>
          <button
            onClick={handleUpload}
            type="submit"
            className="justify-end ml-auto mr-8 bg-warning-10 text-black py-2 px-6 rounded-lg text-sm"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default InfoAllCourse;
