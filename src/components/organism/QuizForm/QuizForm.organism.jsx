import React from "react";
import QuizInput from "../QuizInput/QuizInput.organism";
import QuizHeader from "../../molecules/QuizHeader/QuizHeader.molecule";

function QuizForm({ values, arrayHelpers, setFieldValue }) {
  if (values.question.length < 1) {
    return undefined;
  }

  return (
    <div>
      <QuizHeader />
      <section className="shadow-sm shadow-gray-500 p-3 min-h-fit w-5/6 my-10">
        <div className="flex gap-5 justify-between ">
          <QuizInput
            arrayHelpers={arrayHelpers}
            values={values}
            setFieldValue={setFieldValue}
          />
        </div>
      </section>
      <div className="flex justify-end me-16 mt-24">
        <button type="submit" className=" bg-warning-10 px-5 py-2 rounded-lg font-bold outline-none">
          Submit
        </button>
      </div>
    </div>
  );
}

export default QuizForm;
