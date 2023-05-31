import React from "react";
import ArrowPath from "../../atoms/Icons/ArrowPath.atom.jsx";
import Camera from "../../atoms/Icons/camera.atom";
import { useFormik } from "formik";
import ValidationProduct from "../../molecules/ValidationProductCourse/ValidationProduct.molecule.jsx";
import Arrow from "../../atoms/Icons/Arrow.atom.jsx";

const NewCourse = () => {
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
              <Arrow />
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
                <Arrow />
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
