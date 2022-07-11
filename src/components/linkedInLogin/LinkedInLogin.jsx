import React from "react";
import PropTypes from "prop-types";
import { LinkedIn } from "react-linkedin-login-oauth2";
import linkedIn from "react-linkedin-login-oauth2/assets/linkedin.png";

export const LinkedInLoginPage = ({
  cleintId,
  altText,
  redirectUri,
  onSuccess,
  onError,
}) => {
  console.log(cleintId);
  return (
    <div>
      <LinkedIn
        clientId={cleintId}
        redirectUri={redirectUri}
        onSuccess={onSuccess}
        onError={onError}
      >
        {({ linkedInLogin }) => (
          <img
            onClick={linkedInLogin}
            src={linkedIn}
            alt={altText}
            style={{ maxWidth: "180px", cursor: "pointer" }}
          />
        )}
      </LinkedIn>
    </div>
  );
};

LinkedInLoginPage.propTypes = {
  cleintId: PropTypes.string,
  redirectUri: PropTypes.string,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  altText: PropTypes.string,
};

LinkedInLoginPage.defaultProps = {
  cleintId: "77g3pzlcq4qbhb",
  redirectUri: window.location.origin,
  onSuccess: undefined,
  onError: undefined,
  altText: "Sign in with LinkedIn",
};
