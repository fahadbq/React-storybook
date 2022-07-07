import React from "react";
import PropTypes from "prop-types";
import { LinkedIn } from "react-linkedin-login-oauth2";
import linkedIn from "react-linkedin-login-oauth2/assets/linkedin.png";

export const LinkedInLoginPage = ({ cleintId, buttonText }) => {
  console.log(cleintId);
  return (
    <div>
      <LinkedIn
        clientId={cleintId}
        redirectUri={`${window.location.origin}/linkedin`}
        onSuccess={(response) => {
          console.log(response);
        }}
        onError={(error) => {
          console.log(error);
        }}
      >
        {({ linkedInLogin }) => (
          <img
            onClick={linkedInLogin}
            src={linkedIn}
            alt={buttonText}
            style={{ maxWidth: "180px", cursor: "pointer" }}
          />
        )}
      </LinkedIn>
    </div>
  );
};

LinkedInLoginPage.propTypes = {
  cleintId: PropTypes.string,
  buttonText: PropTypes.string,
};

LinkedInLoginPage.defaultProps = {
  cleintId: "77g3pzlcq4qbhb",
  buttonText: "Sign in with LinkedIn",
};
