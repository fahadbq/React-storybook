import React from "react";
import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

export const GoogleLoginPage = ({ clientId, buttonText }) => {
  const responseGoogle = (response) => {
    const user_obj = jwt_decode(response.credential);
    console.log(user_obj);
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          render={(renderProps) => (
            <button
              type="button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FcGoogle /> Sign in with google
            </button>
          )}
          onSuccess={responseGoogle}
          onError={responseGoogle}
          cookiePolicy="single_host_origin"
        />
      </GoogleOAuthProvider>
    </div>
  );
};

GoogleLoginPage.propTypes = {
  clientId: PropTypes.string,
  buttonText: PropTypes.string,
};

GoogleLoginPage.defaultProps = {
  clientId:
    "26062456275-d68v7carbsr6j3aji9oqjiteccanuor4.apps.googleusercontent.com",
  buttonText: "Login",
};
