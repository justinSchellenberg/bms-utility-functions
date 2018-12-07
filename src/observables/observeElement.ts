export interface IObserverConfig {
  attributes: boolean;
  characterData: boolean;
  childList: boolean;
  subtree: boolean;
  attributeOldValue: boolean;
  characterDataOldValue: boolean;
  attributeFilter: boolean;
}

export const observeElement = (watchElement:any , observeOnce: boolean = true, callback: any) => {
  const observer = new MutationObserver((e) =>  {
    if (e[0].removedNodes){
      callback();
      if(observeOnce){
        observer.disconnect(); // Disconnect old observer, so the obs don't stack.
      }
    }
  });
  const config: IObserverConfig =
  {
    attributeFilter: false, // What specific attributes should be watched?
    attributeOldValue: true, // Do you want the original value of the attribute?
    attributes: true, // Has the element had any changes to attributes?
    characterData: true, // Has any text inside of the element changed?
    characterDataOldValue: true, // Do you want the original text of the element?
    childList: true, // Have elements been added/removed directly in this element?
    subtree: true, // Have elements more than one level deep changed?
  };

  /* tslint:disable */
  observer.observe(watchElement.parentNode, config);
  /* tslint:enable */
}
