import React from "react";
import * as ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";
const deps = require("../package.json").dependencies;

import("home/Home");
import("profile/Profile");
import("search/Search");

const All = () => {
  return (
    <div className="space-y-5">
      <div className="grid grid-flow-col grid-cols-3 gap-4 rounded-lg">
        <div className="col-span-3 p-4 rounded-lg shadow-lg bg-blue-50">
          <h1>All Page</h1>
          <div>Built React Version: {deps.react}</div>
          <div>Running React Version: {React.version}</div>
        </div>
      </div>
      <h1>Composed MFEs</h1>
      <div className="grid grid-flow-col grid-cols-3 gap-4 rounded-lg">
        <web-home containerclasses="p-4 rounded-lg shadow-lg bg-blue-50" />
        <web-profile containerclasses="p-4 rounded-lg shadow-lg bg-blue-50" />
        <web-search containerclasses="p-4 rounded-lg shadow-lg bg-blue-50" />
      </div>
    </div>
  );
};

All.propTypes = {
  containerclasses: PropTypes.string,
};

const componentName = "web-all";
customElements.define(
  componentName,
  reactToWebComponent(All, React, ReactDOM)
);

export { componentName };