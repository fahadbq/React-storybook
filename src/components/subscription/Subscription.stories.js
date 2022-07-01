import React from "react";
import { Success } from "../button/Button.stories";
import { Large } from "../input/Input.stories";

export default {
  title: "form/Subscription",
};

export const PrimarySubscription = () => (
  <>
    <Large />
    <Success />
  </>
);
