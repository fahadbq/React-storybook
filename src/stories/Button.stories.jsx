import React from "react";
import { Button } from "../components/button/Button";

export default {
  title: "form/Button",
  component: Button,
};

// export const Primary = () => <Button variant="primary"> Primary </Button>;
// export const Secondary = () => <Button variant="secondary"> Secondary </Button>;
// export const Success = () => <Button variant="success"> Success </Button>;
// export const Danger = () => <Button variant="danger"> Danger </Button>;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};

export const Success = Template.bind({});

Success.args = {
  variant: "success",
  children: "Success",
};

export const Danger = Template.bind({});

Danger.args = {
  variant: "danger",
  children: "Danger",
};
