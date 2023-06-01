import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gambarSoal: null,
  forms: [
    {
      question: "",
      answers: {
        a: "",
        b: "",
        c: "",
        d: "",
      },
      keyAnswer: "",
    },
  ],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setGambarSoal: (state, action) => ({
      ...state,
      gambarSoal: action.payload,
    }),

    setShowForm: (state, action) => ({
      ...state,
      showForm: action.payload,
    }),

    setForms: (state, action) => ({
      ...state,
      forms: action.payload,
    }),
  },
});

export default quizSlice;
