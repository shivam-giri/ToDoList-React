import React from "react";
import App from "./App";
import { render } from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import "./index.css";

render(<App />, document.querySelector("#root"));
