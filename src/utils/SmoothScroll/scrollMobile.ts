import { Settings } from './types';

type Args = {
  settings: Settings;
  targetId: string;
};

/**
 * Scroll to the targetId, this function assumes that the targetId exists.
 */
const scrollMobile = ({ targetId, settings }: Args) => {
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
    targetElement = document.querySelector(targetId) as HTMLElement;
    targetPosition = targetElement.offsetTop - distanceFromTop;
  }

  const startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  const duration = settings.animationDuration;
  let start: number | null = null;

  window.requestAnimationFrame(step);

  function step(timestamp: number) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const t = progress / settings.animationDuration;
    const newPos = startPosition + distance * settings.timingFunction(t);
    window.scrollTo(0, newPos);
    if (progress < duration) {
      window.requestAnimationFrame(step);
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

export default scrollMobile;
