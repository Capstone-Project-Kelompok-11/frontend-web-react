import * as React from "react";
import { Formik, Form, FieldArray } from "formik";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getRequest,
  postRequest,
  updateRequest,
} from "../../utils/fetcherMethod";
import QuizHeader from "../../components/molecules/QuizHeader/QuizHeader.molecule";
import PlusIcon from "../../components/atoms/Icons/PlusIcon.atom";
import QuizForm from "../../components/organism/QuizForm/QuizForm.organism";

function Quiz() {
  // const { setValues } = Formik;
  const { id_chapter } = useParams();
  const initialValues = {
    quizzes: [
      {
        question: "",
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        valid: "",
      },
    ],
  };

  const { data: existingData } = useSWR(
    `/api/v1/admin/module/quiz?id=${id_chapter}`,
    getRequest
  );

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log("data exist", existingData?.data);

  //       if (existingData?.data) {
  //         setValues(initialState)
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleSubmit = async (values, { resetForm }) => {
    const data = {
      quizzes: values.quizzes.map((quiz) => ({
        question: quiz.question,
        choices: [
          { text: quiz.text1, valid: quiz.valid === quiz.text1 },
          { text: quiz.text2, valid: quiz.valid === quiz.text2 },
          { text: quiz.text3, valid: quiz.valid === quiz.text3 },
          { text: quiz.text4, valid: quiz.valid === quiz.text4 },
        ],
      })),
    };
    try {
      if (existingData) {
        const response = await updateRequest(
          `/api/v1/admin/module/quiz?id=${id_chapter}`,
          JSON.stringify(data)
        );
        toast.success("Edit quiz success");
      }
      if (existingData === undefined) {
        const response = await postRequest(
          `/api/v1/admin/module/quiz?id=${id_chapter}`,
          JSON.stringify(data)
        );
        toast.success("Create quiz success");
      }

      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize:true
      onSubmit={handleSubmit}
      render={({ values }) => (
        <Form>
          <FieldArray
            name="quizzes"
            render={(arrayHelpers) => (
              <div>
                <ToastContainer position="top-center" autoClose={1000} />
                {values.quizzes && values.quizzes.length > 0 ? (
                  values.quizzes.map((_, index) => (
                    <section className="flex flex-col gap-6 me-8" key={index} />
                  ))
                ) : (
                  <section className="flex flex-col gap-6 me-8">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <QuizHeader />
                        <PlusIcon
                          height={35}
                          width={35}
                          onClick={() =>
                            arrayHelpers.push({
                              question: "",
                              text1: "",
                              text2: "",
                              text3: "",
                              text4: "",
                              valid: "",
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
                <QuizForm arrayHelpers={arrayHelpers} values={values} />
              </div>
            )}
          />
        </Form>
      )}
    />
  );
}

export default Quiz;
