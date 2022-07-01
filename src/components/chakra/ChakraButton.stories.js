import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "chakra/Button",
  component: Button,
  argTypes: {
    //ArguementTypes
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />; //Arguements

export const Success = Template.bind({});

Success.args = {
  // Re-Assign the object to make our own stories
  colorScheme: "green",
  children: "Success",
};

export const Danger = Template.bind({});

Danger.args = {
  // Re-Assign the object to make our own stories
  colorScheme: "red",
  children: "Danger",
};
