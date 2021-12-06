import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "../App";
import "./popup.scss";

var mountNode = document.getElementById("popup");
ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    mountNode
  );
