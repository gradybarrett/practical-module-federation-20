import React from "react";
import * as ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";
const deps = require("../package.json").dependencies;

const Search = ({ containerclasses }) => {
  return (
    <div className={containerclasses}>
      <h1>Search Page</h1>
      <div>Built React Version: {deps.react}</div>
      <div>Running React Version: {React.version}</div>
    </div>
  );
};

Search.propTypes = {
  containerclasses: PropTypes.string,
};

const componentName = "web-search";
customElements.define(
  componentName,
  reactToWebComponent(Search, React, ReactDOM)
);

export { componentName };
