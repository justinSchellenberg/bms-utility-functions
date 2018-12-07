/**
 *
 * @param watchElement The Element To Observer
 * @param {boolean} observeOnce - To Only observer the element once, if false will continue to observer
 * @param callback - The callback function to execute every time the element changes.
 * @constructor
 */
export const ObserveElement = (watchElement: any, observeOnce: boolean = true, callback: any) => {
  let observer: any;
  observer = new MutationObserver(observed);

  observer.observe(watchElement.parentNode, {
    attributeFilter: false, // What specific attributes should be watched?
    attributeOldValue: true, // Do you want the original value of the attribute?
    attributes: true, // Has the element had any changes to attributes?
    characterData: true, // Has any text inside of the element changed?
    characterDataOldValue: true, // Do you want the original text of the element?
    childList: true, // Have elements been added/removed directly in this element?
    subtree: true, // Have elements more than one level deep changed?
  });

  function observed(e: any) {
    if (e[0].removedNodes) {
      callback();
      if (observeOnce) {
        observer.disconnect(); // Disconnect old observer, so the obs don't stack.
      }
    }
  }
};
