import { Settings } from './types';

type args = {
  settings: Settings;
  targetId: string;
};

/**
 * The scroll function for desktop devices, this function stops animating once the user
 * scrolls. This function uses some functions that are not possible on some devices so
 * that is why this function should be used on dekstop devices.
 *
 * This function assumes that the target element exists and the click source was an anchor.
 */
const scrollDesktop = ({ targetId, settings }: args) => {
  // get the target query selector
  if (settings.changeUrl) {
    window.history.replaceState(null, '', targetId);
  }

  // the targetPosition depends on the screen width
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.getElementsByTagName('body')[0].clientWidth;

  // calculate how many px will need to be scrolled
  let distanceFromTop;
  if (screenWidth > settings.navigationBreakpoint) {
    distanceFromTop = settings.distanceFromTopDesktop;
  } else {
    distanceFromTop = settings.distanceFromTopMobile;
  }

  // if targetId = "#" --> scroll to top
  let targetElement: HTMLElement;
  let targetPosition: number;

  if (targetId === '#') {
    targetPosition = 0;
  } else {
    targetElement = document.querySelector(targetId!) as HTMLElement;
    targetPosition = targetElement.offsetTop - distanceFromTop;
  }

  const startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  const duration = settings.animationDuration;
  let start: number | null = null;

  window.requestAnimationFrame(step);

  // abort scrolling when user scrolls
  let previousPosition: number | null = null;
  let abortAnimation = false;

  function step(timestamp: number) {
    if (!start) {
      start = timestamp;
      previousPosition = window.pageYOffset;
    }

    // check if user scrolled
    if (
      previousPosition &&
      parseInt(previousPosition.toString()) !== window.pageYOffset
    ) {
      abortAnimation = true;
    }

    // if user didn't scroll or is mobile device
    if (!abortAnimation) {
      // calculating next position
      const progress = timestamp - start;
      const t = progress / settings.animationDuration;
      const newPos = startPosition + distance * settings.timingFunction(t);

      // scrolling and checking if animation should end
      window.scrollTo(0, newPos);
      if (progress < duration) {
        previousPosition = newPos;
        window.requestAnimationFrame(step);
      } else {
        previousPosition = null;
      }
    }
  }

  // update url if target is an id
  if (settings.changeUrl && targetId === '#') {
    window.history.replaceState(null, '', ' ');
  } else if (
    settings.changeUrl &&
    typeof targetId === 'string' &&
    targetId[0] === '#'
  ) {
    window.history.replaceState(null, '', targetId);
  }

  // if custom function is provided
  if (settings.customFunction) {
    settings.customFunction();
  }
};

export default scrollDesktop;
