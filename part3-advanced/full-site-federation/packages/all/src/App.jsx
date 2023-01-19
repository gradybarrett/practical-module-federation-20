import React from "react";
import { createRoot } from "react-dom/client";

import All from "./All";

import "./index.scss";
import "antd/dist/antd.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<All />);
