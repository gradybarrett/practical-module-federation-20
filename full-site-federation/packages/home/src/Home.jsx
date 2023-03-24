import React from "react";
import * as ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";
// import ReactWebComponent from 'react-web-component';
const deps = require("../package.json").dependencies;

const Home = ({ containerclasses }) => {
  return (
    <div className={containerclasses}>
      <h1>Home Page</h1>
      <div>Built React Version: {deps.react}</div>
      <div>Running React Version: {React.version}</div>
    </div>
  );
};

Home.propTypes = {
  containerclasses: PropTypes.string,
};

const componentName = "web-home";
// ReactWebComponent.create(Home, componentName);

customElements.define(
  componentName,
  reactToWebComponent(Home, React, ReactDOM)
);

export { componentName };
