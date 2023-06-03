import React from "react";
import QuizInput from "../QuizInput/QuizInput.organism";
import QuizHeader from "../../molecules/QuizHeader/QuizHeader.molecule";

function QuizForm({ values, arrayHelpers, setFieldValue }) {
  if (values.question.length < 1) {
    return undefined;
  }

  return (
    <div>
      <div className="flex justify-between me-10">
        <QuizHeader />
        <button
          type="submit"
          className="bg-primary-10 px-5 py-2 rounded-lg font-bold outline-none"
        >
          SUBMIT
        </button>
      </div>
      <section className="shadow-sm shadow-gray-500 p-3 min-h-fit me-10 my-6">
        <div className="flex gap-5 justify-between max-h-[480px]">
          <QuizInput
            arrayHelpers={arrayHelpers}
            values={values}
            setFieldValue={setFieldValue}
          />
        </div>
      </section>
      <div className="flex justify-end me-16 mt-24">
        <button
          type="submit"
          className="bg-warning-10 px-5 py-2 rounded-lg font-bold outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default QuizForm;
