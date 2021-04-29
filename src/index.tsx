import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SmoothScroll, { isTouchDevice } from './utils/SmoothScroll';

const scrollSettings = {
  animationDuration: 800,
  navigationBreakpoint: 600,
  distanceFromTopMobile: 50,
  distanceFromTopDesktop: 60,
  changeUrl: false,
};

ReactDOM.render(
  <React.StrictMode>
    <SmoothScroll scrollSettings={scrollSettings}>
      <App />
    </SmoothScroll>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (!isTouchDevice()) {
  document.querySelector('body')?.classList.add('js-no-touch');
}
