import React from "react";
import PropTypes from "prop-types";
import { Button } from "bootstrap";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

export const FormikInput = ({ formTitle, labelBtn, ...props }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().required("Enter your email"),
    password: Yup.string().trim().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, isValid, dirty, errors, touched, handleSubmit }) => (
        <div>
          {formTitle && <h1> {formTitle} </h1>}
          <Form>
            <div className="login-form">
              <label htmlFor=""> Email </label>
              <div className="form-control">
                <Field name="email" type="text" />
              </div>
              <ErrorMessage component="div" name="email" />
            </div>
            <>
              <label htmlFor=""> Password </label>
              <div>
                <Field name="password" type="text" />
              </div>
              <ErrorMessage component="div" name="password" />
            </>
            <div>
              <Button type="submit" variant="primary">
                {labelBtn}
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

FormikInput.propTypes = {
  formTitle: PropTypes.string,
  labelBtn: PropTypes.string,
};

FormikInput.defaultProps = {
  formTitle: "Login Form",
  labelBtn: "Send",
};
