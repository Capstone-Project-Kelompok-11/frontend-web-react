import * as Yup from "yup";

export const initCreateNewChapterValue = {
  courseName: "",
  courseDes: "",
};

export const validationCreateNewChapter = Yup.object().shape({
  courseName: Yup.string().required(),
  courseDes: Yup.string().required(),
});
