import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Raven from "raven-js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Raven.config(
  "https://611ddd10a211460fa04522dd29aebced@o1142155.ingest.sentry.io/6201033",
  {
    release: "1-0-0",
    environment: "devlopment-test",
  }
).install();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
