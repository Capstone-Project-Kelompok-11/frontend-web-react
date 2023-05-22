/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from "react";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../components/templates/Navbar";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // Logika untuk mengirim data login
      console.log(values);
      toast.success("Login berhasil");
    },
    validate: (values) => {
      const errors = {};

      // Validasi email
      if (!values.email) {
        errors.email = "Email dibutuhkan";
      }

      // Validasi password
      if (!values.password) {
        errors.password = "Password dibutuhkan";
      }

      return errors;
    },
  });

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <Navbar />
      <ToastContainer position="top-center" />
      <div className="container w-100">
        <div href="" className="wrab" id="wrab">
          <div className="bg-color ">
            <div className="badan" id="modal">
              <form
                onSubmit={formik.handleSubmit}
                method="get"
                acceptCharset="utf-8"
              >
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={
                    formik.errors.email && formik.touched.email ? "error" : ""
                  }
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error-message">{formik.errors.email}</div>
                ) : null}
                <label htmlFor="password">Password:</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={
                      formik.errors.password && formik.touched.password
                        ? "error"
                        : ""
                    }
                  />
                  <span
                    className={`password-toggle-icon ${
                      showPassword ? "show" : ""
                    }`}
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </span>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="error-message">{formik.errors.password}</div>
                ) : null}
                <button type="submit" className="btn2">
                  Login
                </button>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
