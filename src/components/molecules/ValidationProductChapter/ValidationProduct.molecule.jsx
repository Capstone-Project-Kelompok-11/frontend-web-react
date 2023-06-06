import React from "react";
import * as Yup from "yup";

const ValidationProduct = Yup.object().shape({
  courseName: Yup.string().required(),
  createDes: Yup.string().required(),
});

export default ValidationProduct;
