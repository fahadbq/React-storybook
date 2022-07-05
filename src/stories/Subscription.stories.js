import React from "react";
import { Success } from "../stories/Button.stories";
import { Large } from "../stories/Input.stories";

export default {
  title: "form/Subscription",
};

export const PrimarySubscription = () => (
  <>
    <Large />
    <Success />
  </>
);
