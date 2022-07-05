/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

export const GoogleLogin = ({ clientId, buttonText }) => {
  //handle google login function
  //   const handleCallbackResponse = (response) => {
  //     console.log("Encoded JWT Id token", response.credential);
  //   };

  useEffect(() => {
    /* Global google */
    // google.accounts.id.initialize({
    //   cliend_id:
    //     "26062456275-d68v7carbsr6j3aji9oqjiteccanuor4.apps.googleusercontent.com",
    //   callback: handleCallbackResponse,
    // });
    // google.account.id.renderButton(document.getElementById("signInDiv"), {
    //   theme: "outline",
    //   size: "large",
    // });
  }, []);

  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
};

GoogleLogin.propTypes = {
  clientId: PropTypes.string,
  buttonText: PropTypes.string,
};

GoogleLogin.propTypes = {
  clientId:
    "26062456275-d68v7carbsr6j3aji9oqjiteccanuor4.apps.googleusercontent.com",
  buttonText: "Login",
};
