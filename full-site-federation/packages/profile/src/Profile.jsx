import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";
const deps = require("../package.json").dependencies;

const Profile = ({ containerclasses }) => {
  return (
    <div className={containerclasses}>
      <h1>Profile Page</h1>
      <div>Built React Version: {deps.react}</div>
      <div>Running React Version: {React.version}</div>
    </div>
  );
};

Profile.propTypes = {
  containerclasses: PropTypes.string,
};

const componentName = "web-profile";
customElements.define(
  componentName,
  reactToWebComponent(Profile, React, ReactDOM)
);

export { componentName };
