import React, { useMemo } from "react";
import { useFormik } from "formik";
import {
  initCreateNewCourseValue,
  validationCreateNewCourse,
} from "./constant.js";
import CameraIcon from "../../atoms/Icons/CameraIcon.atom.jsx";
import ArrowPathIcon from "../../atoms/Icons/ArrowPathIcon.atom.jsx";
import ArrowIcon from "../../atoms/Icons/ArrowIcon.atom.jsx";
import { useLocation } from "react-router-dom";
import { postRequest, updateRequest } from "../../../utils/fetcherMethod.js";

const NewCourseForm = ({ createNewCourse, data = {} }) => {
  const initData = useMemo(() =>
    createNewCourse ? initCreateNewCourseValue : data
  );

  const formik = useFormik({
    initialValues: initData,
    validationSchema: validationCreateNewCourse,
    onSubmit: async (values) => {
      if (values) {
        try {
          const fetchData = createNewCourse
            ? postRequest(`/api/v1/admin/course`, values)
            : updateRequest(`/api/v1/admin/course?id=${data.id}`, values);
          await fetchData;
        } catch (error) {
          console.log(error.message);
        }
        alert("Succes");
        formik.resetForm();
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-8 flex items-center">
        <p className="text-2xl">New Course</p>

        <div className="ml-2 cursor-pointer hover:animate-spin">
          <ArrowPathIcon />
        </div>
      </div>

      <div className="w-full flex flex-row gap-6">
        <div className="w-96">
          <div className="mb-2 flex items-center">
            <p className="font-semibold">Course Thumbnail</p>
          </div>
          <div className="w-full h-270 bg-gray-200 flex items-center  rounded-xl justify-center rounded-10">
            <div className="image-container">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 "
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
        <div className="w-5/6 mr-10 ">
          <div className=" mb-2 ">
            <label htmlFor="name ">
              <div className="flex items-center">
                <p className=" font-semibold">Course Name</p>
                <span className="text-red-500 font-semibold">*</span>
              </div>
            </label>
            <input
              type="text"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
              className="w-full h-12 mt-3 bg-gray-200 p-5  rounded-lg border border-gray-500"
              placeholder="e.g. “Capstone Project 11”"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description">
              <div className="flex items-center">
                <label className=" font-semibold">Create Description</label>
                <span className="text-red-500 font-semibold">*</span>
              </div>
            </label>
            <textarea
              name="description"
              id="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className="resize-y w-full h-40 mt-3 bg-gray-200 p-5 rounded-lg border border-gray-500"
              placeholder="Type here..."
              rows="5"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="  mr-10 flex flex-row items-center ">
        <div className="w-full flex  flex-col gap-2">
          <label htmlFor="price ">
            <div className="flex items-center">
              <p className="font-semibold">Course Price</p>
              <span className="text-red-500 font-semibold">*</span>
            </div>
          </label>
          <input
            type="text"
            id="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            name="price"
            className="w-80 h-12 mt-1 bg-gray-200 p-5 rounded-lg border border-gray-500"
            placeholder="00000"
          />
        </div>
        <div className=" w-full flex flex-col p-2 ml-4 relative">
          <label htmlFor="level ">
            <div className="flex items-center">
              <p className=" font-semibold">Level Course</p>
              <span className="text-red-500 font-semibold">*</span>
            </div>
          </label>
          <select
            name="level"
            value={formik.values.level}
            onChange={formik.handleChange}
            id="level"
            className="wblock appearance-none w-80 h-12 mt-3 rounded-lg bg-gray-200 border-gray-500 text-gray-700 py-3 px-4 pr-8  border-solid border "
          >
            <option value="">select level course</option>
            <option value="beginner">beginner</option>
            <option value="intermediate">intermediate</option>
            <option value="advanced">advanced</option>
          </select>
          <span className="absolute inset-y-0 right-7 top-9 flex items-center px-2">
            <ArrowIcon />
          </span>
        </div>
        <div className="w-full flex flex-col p-2 ml-2 relative">
          <label htmlFor="category_courses ">
            <div className="flex items-center">
              <p className="font-semibold">Course Category</p>
              <span className="text-red-500 font-semibold">*</span>
            </div>
          </label>
          <div>
            <select
              name="category_courses"
              value={formik.values.category_courses}
              onChange={formik.handleChange}
              id=""
              className="wblock appearance-none w-80 h-12 mt-3  rounded-lg bg-gray-200 border-gray-500 text-gray-700 py-3 px-4 pr-8  border-solid border "
            >
              <option value="">course category</option>
              <option value="Design">Design</option>
              <option value="business">business</option>
              <option value="software">software</option>
            </select>
            <span className="absolute inset-y-0 right-7 top-9 flex items-center px-2 ">
              <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="flex font-semibold mt-6">
        <button className="justify-start  bg-warning-10 hover:bg-warning-30 duration-500 text-black py-2 px-6 rounded-lg text-sm fw-bold">
          Back
        </button>
        <button
          type="submit"
          className="justify-end ml-auto mr-10 bg-warning-10 hover:bg-warning-30 duration-500 text-black py-2 px-6 rounded-lg text-sm"
        >
          Upload
        </button>
      </div>
    </form>
  );
};

export default NewCourseForm;
