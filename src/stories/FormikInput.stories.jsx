import React from "react";
import { FormikInput } from "../components/formikInput/FormikInput";

export default {
  title: "formik/input",
  component: FormikInput,
};

const Template = (args) => <FormikInput {...args} />;

export const InputField = Template.bind({});
InputField.args = {};
