import Raven from "raven-js";
function init() {
  Raven.config(
    "https://611ddd10a211460fa04522dd29aebced@o1142155.ingest.sentry.io/6201033",
    {
      release: "1-0-0",
      environment: "devlopment-test",
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default { init, log };
