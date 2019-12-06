import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const SampleForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
                  .email()
                  .required("This field is required"),

      password: Yup.string()
                  .required("No password provided")
                  .min(8,"Password is too short")
    })}
  >
    {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            value={values.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your Email"
            className="form-control form-contro-sm"
          />
          {errors.email && touched.email && ("Invalid email")}
          <br/>
          <input
            type="password"
            value={values.password}
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your Password"
            className="form-control form-contro-sm"
          />
          <br/>
          <button type="submit" 
            className="btn btn-primary"
            disabled={isSubmitting}>
            <i className="far fa-paper-plane"></i> Submit data...
          </button>
        </form>
      )}
  </Formik>
);

export default SampleForm;
