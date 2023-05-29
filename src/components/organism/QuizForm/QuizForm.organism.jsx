import React from "react";
import QuizInput from "../QuizInput/QuizInput.organism";

function QuizForm() {
  return (
    <section className="shadow-sm shadow-gray-500 p-3 min-h-fit w-5/6">
      <div className="flex gap-5 justify-between">
        <QuizInput />
      </div>
    </section>
  );
}

export default QuizForm;
