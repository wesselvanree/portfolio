export interface Easings {
  linear(t: number): number;
  easeInCubic(t: number): number;
  easeOutCubic(t: number): number;
  easeInOutCubic(t: number): number;
  easeInQuad(t: number): number;
  easeOutQuad(t: number): number;
  easeInOutQuad(t: number): number;
  easeInQuart(t: number): number;
  easeOutQuart(t: number): number;
  easeInOutQuart(t: number): number;
  easeInQuint(t: number): number;
  easeOutQuint(t: number): number;
  easeInOutQuint(t: number): number;
}

export interface Settings {
  timingFunction(t: number): number;
  animationDuration: number;
  changeUrl: boolean;
  navigationBreakpoint: number;
  distanceFromTopDesktop: number;
  distanceFromTopMobile: number;
  customFunction?: Function;
}

export interface SmoothScrollSettings {
  easing?: keyof Easings;
  animationDuration?: number;
  changeUrl?: boolean;
  navigationBreakpoint?: number;
  distanceFromTopDesktop?: number;
  distanceFromTopMobile?: number;
  customFunction?: Function;
}
