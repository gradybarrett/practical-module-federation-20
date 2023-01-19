import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./Home";

import "./index.scss";
import "antd/dist/antd.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Home />);
