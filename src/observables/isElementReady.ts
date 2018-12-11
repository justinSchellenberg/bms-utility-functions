'use strict';

const isElementExist = (selector: string) => {
  return document.body.contains(document.querySelector(selector));
}

/**
 *
 * @param {string} selector  The selector for the element to observe
 * @param callback - The function to execute once the element is found.
 * @constructor
 */
export const IsElementReady = (selector: string, callback: any) => {
  if(isElementExist(selector)){
    callback(document.querySelector(selector));
    return;
  }
  const observer = new MutationObserver((m:any, o:any ) => {
    if (isElementExist(selector)) {
      observer.disconnect(); // Disconnect old observer, so the obs don't stack.
      callback(document.querySelector(selector));
    }
  });
  observer.observe(document.body, {
    childList: true, // Have elements been added/removed directly in this element?
    subtree: true, // Have elements more than one level deep changed?
  });
}

/**
 *
 * @param {string} selector  The selector for the element to observe
 * @param callback - The Promise to resolve once element is found
 * @constructor
 */
export const IsElementPromiseReady = (selector: string) => {
  return new Promise((resolve, reject) => {
    IsElementReady(selector, (elem:any) => {
      resolve(elem);
    })
  })
}

