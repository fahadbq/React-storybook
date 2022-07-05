import React from "react";
import { GoogleLogin } from "../components/googleLogin/GoogleLogin";

export default {
  title: "form/GoogleLogin",
  component: GoogleLogin,
};

const Template = (args) => <GoogleLogin {...args} />;

export const GoogleForm = Template.bind({});
GoogleForm.args = {};
