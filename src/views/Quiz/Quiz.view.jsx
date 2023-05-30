import React from "react";
import { Formik, Form, FieldArray } from "formik";
import QuizHeader from "../../components/molecules/QuizHeader/QuizHeader.molecule";
import PlusIcon from "../../components/atoms/Icons/PlusIcon.atom";
import QuizForm from "../../components/organism/QuizForm/QuizForm.organism";

function Quiz() {
  return (
    <Formik
      initialValues={{ question: [] }}
      onSubmit={(values) =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values, setFieldValue }) => (
        <Form>
          <FieldArray
            name="question"
            render={(arrayHelpers) => (
              <div>
                {values.question && values.question.length > 0 ? (
                  values.question.map(() => (
                    <section className="flex flex-col gap-6 me-8" />
                  ))
                ) : (
                  <section className="flex flex-col gap-6 me-8">
                    <div className="flex flex-col">
                      <div className="flex justify-between ">
                        <QuizHeader />
                        <PlusIcon
                          height={35}
                          width={35}
                          onClick={() =>
                            arrayHelpers.push({
                              input1: "",
                              input2: "",
                              input3: "",
                              input4: "",
                            })
                          }
                        />
                      </div>
                      <p className="text-center text-light-90 py-10">
                        Create a new quiz if there is no quiz
                      </p>
                    </div>
                  </section>
                )}
                <QuizForm
                  arrayHelpers={arrayHelpers}
                  values={values}
                  setFieldValue={setFieldValue}
                />
              </div>
            )}
          />
        </Form>
      )}
    />
  );
}

export default Quiz;
