import React from "react";
import Input from "../components/input/Input";

export default {
  title: "form/Input",
  component: Input,
};

// export const Small = () => <Input size="small" placeholder="Small size" />;
// export const Medium = () => <Input size="medium" placeholder="Medium size" />;
// export const Large = () => <Input size="large" placeholder="Large size" />;

const Template = (args) => <Input {...args} />;

export const Small = Template.bind({});

Small.args = {
  size: "small",
  placeholder: "Small size",
};

export const Medium = Template.bind({});

Medium.args = {
  size: "medium",
  placeholder: "Medium size",
};

export const Large = Template.bind({});

Large.args = {
  size: "large",
  placeholder: "Large size",
};
