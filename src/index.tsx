import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./ts/smoothScroll.ts";
import SmoothScroll from "./ts/smoothScroll";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const settings = {
  animationDuration: 800,
  navigationBreakpoint: 600,
  distanceFromTopMobile: 50,
  distanceFromTopDesktop: 60,
};

const smoothScroll = new SmoothScroll(settings);

console.log(smoothScroll);

if (!smoothScroll.isMobileDevice) {
  document.querySelector("body")?.classList.add("js-no-touch");
}
