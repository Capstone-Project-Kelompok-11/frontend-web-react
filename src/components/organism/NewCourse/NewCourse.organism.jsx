import React from "react";
import ArrowPath from "../../atoms/Icons/ArrowPath";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewCourse = () => {
  const ValidationProduct = Yup.object().shape({
    courseName: Yup.string().required(),
    createDes: Yup.string().required(),
    coursePrice: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      courseName: "",
      createDes: "",
      coursePrice: "",
      levelCourse: "",
      courseCategory: "",
    },
    validationSchema: ValidationProduct,
    onSubmit: (values) => {
      console.log(values);
      alert("Succes");
      formik.resetForm();
    },
  });

  return (
    <div className="all-course-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-8 flex items-center">
          <p className="text-2xl">New Course</p>

          <div className="ml-2 cursor-pointer hover:animate-spin">
            <ArrowPath />
          </div>
        </div>

        <div className="w-full flex flex-row gap-6">
          <div className="w-96">
            <div className="mb-2 flex items-center">
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
                      <svg
                        width="77"
                        height="70"
                        viewBox="0 0 77 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.8"
                          d="M63 21V14H56V7H63V0H70V7H77V14H70V21H63ZM7.00001 70C5.07501 70 3.42651 69.314 2.05451 67.942C0.682506 66.57 -0.00232739 64.9227 5.94227e-06 63V21C5.94227e-06 19.075 0.686006 17.4265 2.05801 16.0545C3.43001 14.6825 5.07734 13.9977 7.00001 14H18.025L24.5 7H45.5V14H27.5625L21.175 21H7.00001V63H63V31.5H70V63C70 64.925 69.314 66.5735 67.942 67.9455C66.57 69.3175 64.9227 70.0023 63 70H7.00001ZM35 57.75C39.375 57.75 43.0943 56.2182 46.158 53.1545C49.2217 50.0908 50.7523 46.3727 50.75 42C50.75 37.625 49.2182 33.9057 46.1545 30.842C43.0908 27.7783 39.3727 26.2477 35 26.25C30.625 26.25 26.9057 27.7818 23.842 30.8455C20.7783 33.9092 19.2477 37.6273 19.25 42C19.25 46.375 20.7818 50.0943 23.8455 53.158C26.9092 56.2217 30.6273 57.7523 35 57.75ZM35 50.75C32.55 50.75 30.4792 49.9042 28.7875 48.2125C27.0958 46.5208 26.25 44.45 26.25 42C26.25 39.55 27.0958 37.4792 28.7875 35.7875C30.4792 34.0958 32.55 33.25 35 33.25C37.45 33.25 39.5208 34.0958 41.2125 35.7875C42.9042 37.4792 43.75 39.55 43.75 42C43.75 44.45 42.9042 46.5208 41.2125 48.2125C39.5208 49.9042 37.45 50.75 35 50.75Z"
                          fill="#262626"
                        />
                      </svg>
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
        <div className="  mr-10 flex flex-row items-center ">
          <div className="w-full flex  flex-col gap-2">
            <label htmlFor="coursePrice ">
              <div className="flex items-center">
                <p className="font-bold">Course Price</p>
                <span className="text-red-500">*</span>
              </div>
            </label>
            <input
              type="text"
              id="coursePrice"
              value={formik.values.coursePrice}
              onChange={formik.handleChange}
              name="coursePrice"
              className="w-80 h-12 mt-1 bg-gray-200 p-5 rounded-lg border border-gray-500"
              placeholder="00000"
            />
          </div>
          <div className=" w-full flex flex-col p-2 ml-4 relative">
            <label htmlFor="levelCourse ">
              <div className="flex items-center">
                <p className=" font-bold">Level Course</p>
                <span className="text-red-500">*</span>
              </div>
            </label>
            <select
              name="levelCourse"
              value={formik.values.levelCourse}
              onChange={formik.handleChange}
              id="leveCourse"
              className="wblock appearance-none w-80 h-12 mt-3 rounded-lg bg-gray-200 border-gray-500 text-gray-700 py-3 px-4 pr-8  border-solid border "
            >
              <option value="">select level course</option>
              <option value="beginner">beginner</option>
              <option value="intermediate">intermediate</option>
              <option value="advanced">advanced</option>
            </select>
            <span className="absolute inset-y-0 right-7 top-9 flex items-center px-2">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 8.99998C7.32063 8.99998 7.14664 8.96563 6.97803 8.89692C6.80942 8.82822 6.66951 8.73662 6.5583 8.62212L0.369955 2.30152C0.123318 2.04961 0 1.729 0 1.33969C0 0.950379 0.123318 0.629769 0.369955 0.377861C0.616591 0.125953 0.930493 0 1.31166 0C1.69282 0 2.00673 0.125953 2.25336 0.377861L7.5 5.73663L12.7466 0.377861C12.9933 0.125953 13.3072 0 13.6883 0C14.0695 0 14.3834 0.125953 14.63 0.377861C14.8767 0.629769 15 0.950379 15 1.33969C15 1.729 14.8767 2.04961 14.63 2.30152L8.4417 8.62212C8.30717 8.75952 8.16143 8.85708 8.00448 8.91479C7.84753 8.9725 7.67937 9.00089 7.5 8.99998Z"
                  fill="#262626"
                />
              </svg>
            </span>
          </div>
          <div className="w-full flex flex-col p-2 ml-2 relative">
            <label htmlFor="courseCategory ">
              <div className="flex items-center">
                <p className="font-bold">Course Category</p>
                <span className="text-red-500">*</span>
              </div>
            </label>
            <div>
              <select
                name="courseCategory"
                value={formik.values.courseCategory}
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
                <svg
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 8.99998C7.32063 8.99998 7.14664 8.96563 6.97803 8.89692C6.80942 8.82822 6.66951 8.73662 6.5583 8.62212L0.369955 2.30152C0.123318 2.04961 0 1.729 0 1.33969C0 0.950379 0.123318 0.629769 0.369955 0.377861C0.616591 0.125953 0.930493 0 1.31166 0C1.69282 0 2.00673 0.125953 2.25336 0.377861L7.5 5.73663L12.7466 0.377861C12.9933 0.125953 13.3072 0 13.6883 0C14.0695 0 14.3834 0.125953 14.63 0.377861C14.8767 0.629769 15 0.950379 15 1.33969C15 1.729 14.8767 2.04961 14.63 2.30152L8.4417 8.62212C8.30717 8.75952 8.16143 8.85708 8.00448 8.91479C7.84753 8.9725 7.67937 9.00089 7.5 8.99998Z"
                    fill="#262626"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex font-bold mt-6">
          <button className="justify-start  bg-warning-10 text-black py-2 px-6 rounded-lg text-sm fw-bold">
            Back
          </button>
          <button
            type="submit"
            className="justify-end ml-auto mr-10 bg-warning-10 text-black py-2 px-6 rounded-lg text-sm"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCourse;
