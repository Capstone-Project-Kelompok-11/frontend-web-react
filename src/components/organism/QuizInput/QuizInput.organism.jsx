import React from "react";
import { useDispatch } from "react-redux";
import { Field } from "formik";
import IconImages from "../../atoms/Icons/IconImages.atom";
import { useQuizImage } from "../../../config/redux/Quiz/quizSelector";
import quizSlice from "../../../config/redux/Quiz/quizSlice";
import Trashcan from "../../atoms/Icons/Trashcan.atom";
import PlusIcon from "../../atoms/Icons/PlusIcon.atom";

function QuizInput({ arrayHelpers, values, setFieldValue }) {
  const dispatch = useDispatch();
  const imageSoal = useQuizImage();
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      dispatch(
        quizSlice.actions.setGambarSoal(URL.createObjectURL(e.target.files[0]))
      );
      setFieldValue;
    }
  };

  return (
    <div className="w-full">
      {values.question &&
        values.question.length > 0 &&
        values.question.map((_, index) => (
          <div
            key={index}
            className={`flex py-5 ${
              (values.question.length > 1 &&
                index !== values.question.length - 1) ||
              index !== values.question.length - 1
                ? `border-b-2 border-secondary-10`
                : null
            }`}
          >
            <div className="flex flex-col">
              <img src={imageSoal} alt={imageSoal} className="px-6 w-3/6" />
              <div className="flex flex-col ms-5 me-56">
                <div className="flex py-5">
                  <Field
                    name={`question.${index}.Soal${index}`}
                    className="border-b-2 border-gray-600 h-12 bg-gray-100 w-96 outline-none px-2"
                    placeholder="Ketik Soal disini"
                  />
                  <div className="flex items-center justify-center px-10">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center"
                    >
                      <IconImages
                        width={27}
                        height={27}
                        className="hover:bg-gray-100"
                      />
                      <Field
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        name={`question.${index}.soalImage`}
                        onChange={onImageChange}
                      />
                    </label>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 py-4 px-5">
                  <div className="flex justify-items-center gap-4">
                    <Field
                      name={`question.${index}.jawaban${index}`}
                      type="radio"
                      value={values.question[index].input1}
                      className="w-5"
                    />
                    <Field
                      name={`question.${index}.input1`}
                      className="px-2 py-1 outline-none"
                      placeholder="Ketik jawaban disini"
                    />
                  </div>

                  <div className="flex justify-items-center gap-4">
                    <Field
                      name={`question.${index}.jawaban${index}`}
                      type="radio"
                      value={values.question[index].input2}
                      className="w-5"
                    />
                    <Field
                      name={`question.${index}.input2`}
                      className="px-2 py-1 outline-none"
                      placeholder="Ketik jawaban disini"
                    />
                  </div>

                  <div className="flex justify-items-center gap-4">
                    <Field
                      name={`question.${index}.jawaban${index}`}
                      type="radio"
                      value={values.question[index].input3}
                      className="w-5"
                    />
                    <Field
                      name={`question.${index}.input3`}
                      className="px-2 py-1 outline-none"
                      placeholder="Ketik jawaban disini"
                    />
                  </div>

                  <div className="flex justify-items-center gap-4">
                    <Field
                      name={`question.${index}.jawaban${index}`}
                      type="radio"
                      value={values.question[index].input4}
                      className="w-5"
                    />
                    <Field
                      name={`question.${index}.input4`}
                      className="px-2 py-1 outline-none"
                      placeholder="Ketik jawaban disini"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col border-l-2 border-secondary-10 gap-4 px-4 py-8 w-1/6">
              <button
                type="button"
                onClick={() => arrayHelpers.remove(index)} // remove a question from the list
              >
                <Trashcan width={24} height={24} />
              </button>
              <button
                type="button"
                onClick={() => arrayHelpers.push(index + 1, {})} // insert an empty string at a position
              >
                <PlusIcon width={24} height={26} />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default QuizInput;
