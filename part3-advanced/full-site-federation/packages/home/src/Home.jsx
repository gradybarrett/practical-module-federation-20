import React from "react";
import PropTypes from "prop-types";
const deps = require("../package.json").dependencies;
import reactToWebComponent from "react-to-webcomponent";

export default (props) => {
  return (
    <div className={props.containerClasses}>
      <h1>Home Page</h1>
      <h2>Built React Version: {deps.react}</h2>
      <h2>Running React Version: {React.version}</h2>
    </div>
  );
};

// Home.propTypes = {
//   containerClasses: PropTypes.string,
// };

// const WebHome = reactToWebComponent(Home, React, ReactDOM);

// customElements.define("web-home", WebHome);
