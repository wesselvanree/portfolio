/**
 * Checks whether the current device is a touch device.
 *
 * @returns true if the current device is an touch device, false if not.
 */
const isTouchDevice = (): boolean => {
  function touchEventExists() {
    try {
      document.createEvent('TouchEvent');
      return true;
    } catch (e) {
      return false;
    }
  }

  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i) ||
    touchEventExists()
  ) {
    return true;
  }

  return false;
};

export default isTouchDevice;
