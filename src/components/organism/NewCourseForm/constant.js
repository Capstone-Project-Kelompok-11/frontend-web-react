import * as Yup from "yup";

export const initCreateNewCourseValue = {
  courseName: "",
  createDes: "",
  coursePrice: "",
  levelCourse: "",
  courseCategory: "",
};

export const validationCreateNewCourse = Yup.object().shape({
  courseName: Yup.string().required(),
  createDes: Yup.string().required(),
  coursePrice: Yup.string().required(),
});
