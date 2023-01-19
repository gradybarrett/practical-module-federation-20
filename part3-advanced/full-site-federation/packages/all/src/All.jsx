import React from "react";
const deps = require("../package.json").dependencies;
import PropTypes from "prop-types";

const Home = React.lazy(() => import("home/Home"));
const Profile = React.lazy(() => import("profile/Profile"));
const Search = React.lazy(() => import("search/Search"));

export default () => {
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
        <Home containerClasses="p-4 rounded-lg shadow-lg bg-blue-50" />
        <Profile containerClasses="p-4 rounded-lg shadow-lg bg-blue-50" />
        <Search containerClasses="p-4 rounded-lg shadow-lg bg-blue-50" />
      </div>
    </div>
  );
};
