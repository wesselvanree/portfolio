import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './utils/smoothScroll.ts';
import SmoothScroll from './utils/smoothScroll';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const scrollSettings = {
  animationDuration: 800,
  navigationBreakpoint: 600,
  distanceFromTopMobile: 50,
  distanceFromTopDesktop: 60,
  changeUrl: false,
};

const smoothScroll = new SmoothScroll(scrollSettings);

console.log(smoothScroll);

if (!smoothScroll.isMobileDevice) {
  document.querySelector('body')?.classList.add('js-no-touch');
}
