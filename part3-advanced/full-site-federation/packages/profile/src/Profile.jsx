import React from "react";
import PropTypes from "prop-types";
const deps = require("../package.json").dependencies;

export default (props) => {
  return (<div className={props.containerClasses}>
    <h1>Profile Page</h1>
    <div>Built React Version: {deps.react}</div>
    <div>Running React Version: {React.version}</div>
  </div>)
};
