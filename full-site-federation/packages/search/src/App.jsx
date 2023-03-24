import React from "react";
import { createRoot } from "react-dom/client";

import "./Search";

import "./index.scss";
import "antd/dist/antd.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<web-search />);
