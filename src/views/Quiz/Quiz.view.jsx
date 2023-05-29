import React from "react";
import QuizHeader from "../../components/molecules/QuizHeader/QuizHeader.molecule";
import PlusIcon from "../../components/atoms/Icons/PlusIcon.atom";

function Quiz({ values, arrayHelpers }) {
  console.log(values);
  return (
    <section className="flex flex-col gap-6 me-8">
      {values.question && values.question.length > 0 ? (
        values.question.map(() => (
          <div>
            <QuizHeader />
          </div>
        ))
      ) : (
        <div className="flex flex-col">
          <div className="flex justify-between ">
            <QuizHeader />
            <PlusIcon
              height={35}
              width={35}
              onClick={() => arrayHelpers.push({})}
            />
          </div>
          <p className="text-center text-light-90 py-10">
            Create a new quiz if there is no quiz
          </p>
        </div>
      )}
    </section>
  );
}

export default Quiz;
