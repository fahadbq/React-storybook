import React from "react";
import { LinkedInLoginPage } from "../components/linkedInLogin/LinkedInLogin";

export default {
  title: "linkedin/login",
  component: LinkedInLoginPage,
};

const Template = (args) => <LinkedInLoginPage {...args} />;

export const LinkedIn = Template.bind({});
LinkedIn.args = {};
