import * as Yup from "yup";

export const initCreateNewChapterValue = {
  courseName: "",
  createDes: "",
};

export const validationCreateNewChapter = Yup.object().shape({
  courseName: Yup.string().required(),
  createDes: Yup.string().required(),
});
