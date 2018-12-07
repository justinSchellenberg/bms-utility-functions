export interface IObserverConfig {
  attributes: boolean;
  characterData: boolean;
  childList: boolean;
  subtree: boolean;
  attributeOldValue: boolean;
  characterDataOldValue: boolean;
  attributeFilter: boolean;
}

export const ObserveElement = (watchElement: any, observeOnce: boolean = true, callback: any) => {
  let observer: any;
      observer = new MutationObserver(observed);
  const config: any = {
    attributeFilter: false, // What specific attributes should be watched?
    attributeOldValue: true, // Do you want the original value of the attribute?
    attributes: true, // Has the element had any changes to attributes?
    characterData: true, // Has any text inside of the element changed?
    characterDataOldValue: true, // Do you want the original text of the element?
    childList: true, // Have elements been added/removed directly in this element?
    subtree: true, // Have elements more than one level deep changed?
  };
  observer.observe(watchElement.parentNode, config);

  function observed(e: any){
    if (e[0].removedNodes) {
      callback();
      if (observeOnce) {
        observer.disconnect(); // Disconnect old observer, so the obs don't stack.
      }
    }
  }
};
