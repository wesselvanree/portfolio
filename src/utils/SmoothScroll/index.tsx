import React, { useEffect, useRef } from 'react';
import scrollMobile from './scrollMobile';
import scrollDesktop from './scrollDesktop';
import isTouchDevice from './isTouchDevice';
import { Settings, SmoothScrollSettings } from './types';
import easings from './easings';

let isMobileDevice = false;
const defaultSettings: Settings = {
  timingFunction: easings.easeOutQuint,
  animationDuration: 600,
  changeUrl: true,
  navigationBreakpoint: 800,
  distanceFromTopDesktop: 0,
  distanceFromTopMobile: 0,
  // customFunction: closeMenu,
};

interface Props {
  children?: React.ReactChild;
  scrollSettings?: SmoothScrollSettings;
}

/**
 * An element to wrap the elements to listen to click events. Once an anchor tag with
 * a href to an existing element is clicked, this component will handle the scrolling to that
 * element.
 */
const SmoothScroll = ({ children, scrollSettings }: Props) => {
  const scrollWrapper = useRef<HTMLDivElement>(null);
  const settings = Object.assign(defaultSettings, scrollSettings);

  useEffect(() => {
    isMobileDevice = isTouchDevice();
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;

    if (!isValidAnchor(target)) return;

    event.preventDefault();

    const targetId = target.getAttribute('href');
    if (targetId == null || !isValidTargetId(targetId)) {
      console.log(`Element ${targetId} does not exist`);
      return;
    }

    if (isMobileDevice) {
      scrollMobile({ targetId, settings });
      return;
    }
    scrollDesktop({ targetId, settings });
  };

  return (
    <div
      ref={scrollWrapper}
      className="smooth-scroll-wrapper"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

const isValidAnchor = (element: HTMLElement): boolean =>
  element.tagName === 'A' && element.getAttribute('href')?.[0] === '#';

const isValidTargetId = (id: string): boolean => {
  if (id === '#') return true;

  try {
    const element = document.querySelector(id);
    return element != null;
  } catch (error) {
    return false;
  }
};

export { isTouchDevice };
export default SmoothScroll;
