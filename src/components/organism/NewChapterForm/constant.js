import * as Yup from "yup";

export const initCreateNewChapterValue = {
  chapterName: "",
  chapterDes: "",
};

export const validationCreateNewChapter = Yup.object().shape({
  chapterName: Yup.string().required(),
  chapterDes: Yup.string().required(),
});
