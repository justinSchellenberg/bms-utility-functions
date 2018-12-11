/**
 *
 * @param watchElement The Element To Observer
 * @param callback - The callback function to execute Once the Element has Changed.
 */
export const ObserveElementOnce = (watchElement: any, callback: any) => {
  let observer: any;
  observer = new MutationObserver(observed);

  observer.observe(watchElement.parentNode, {
    childList: true, // Have elements been added/removed directly in this element?
    attributes: true, // Has the element had any changes to attributes?
    characterData: true, // Has any text inside of the element changed?
    subtree: true, // Have elements more than one level deep changed?
  });

  function observed(e: any) {
    if (e[0].removedNodes) {
      observer.disconnect(); // Disconnect old observer, so the obs don't stack.
      callback();
    }
  }
};
