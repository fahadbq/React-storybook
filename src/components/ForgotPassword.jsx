import React from "react";
import { Button } from "bootstrap";
import PropTypes from "prop-types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const ForgotPassword = ({ btnLabel, email, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("Invalid email address")
      .required("Email is required"),
  });

  return (
    <div>
      <p>
        Enter your Email address below, within a short time a instruction mail
        will be sent.
      </p>
      <Formik
        initialValues={{ email }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, dirty, errors, touched }) => (
          <Form>
            <Field type="text" name="email" placeholder="Enter Email Id" />
            <ErrorMessage name="email">
              {(msg) => (
                <div>
                  <p>*{msg}</p>
                </div>
              )}
            </ErrorMessage>
            <br />
            <Button type="submit" disabled={!(isValid && dirty)}>
              {btnLabel}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

ForgotPassword.propTypes = {
  email: PropTypes.string,
  btnLabel: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

ForgotPassword.defaultProps = {
  email: "",
  btnLabel: "Send",
  onSubmit: undefined,
};
