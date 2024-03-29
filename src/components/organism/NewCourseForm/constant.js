import * as Yup from "yup";

export const initCreateNewCourseValue = {
  name: "",
  description: "",
  price: "",
  level: "",
  category: "",
};

export const validationCreateNewCourse = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.string().required(),
});
