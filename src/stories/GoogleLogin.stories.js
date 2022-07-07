import React from "react";
import { GoogleLoginPage } from "../components/googleLogin/GoogleLoginPage";

export default {
  title: "googlelogin/GoogleLogin",
  component: GoogleLoginPage,
};

const Template = (args) => <GoogleLoginPage {...args} />;

export const GoogleForm = Template.bind({});
GoogleForm.args = {};
