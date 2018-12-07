interface IListeners {
  fn: any;
  selector: string;
}

let observer: any;

const doc = window.document;
const listeners: IListeners[] = [];

/**
 *
 * @param {string} selector - document.querySelector element selector of an element to watch for
 * @return {Promise<any>} - Returns a promise if and when the element becomes seen and available in the DOM.
 */
export const IsElementReadyPromise = (selectorString: string) => {
  return new Promise(resolve => {
    // Store the selector and callback to be monitored
    listeners.push({
      fn: resolve,
      selector: selectorString,
    });
    if (!observer) {
      // Watch for changes in the document
      observer = new MutationObserver(check);
      observer.observe(doc.documentElement, {
        childList: true,
        subtree: true,
      });
    }
    // Check if the element is currently in the DOM
    check();
  });
};

/**
 *
 * @param {string} selector - document.querySelector element selector of an element to watch for
 * @param callback - Anonymous callback Function to execute if the element becomes seen and available in DOM.
 */
export const IsElementReadyCallback = (selectorString: string, callback: any) => {
  // Store the selector and callback to be monitored
  listeners.push({
    fn: callback,
    selector: selectorString,
  });
  if (!observer) {
    // Watch for changes in the document
    observer = new MutationObserver(check);
    observer.observe(doc.documentElement, {
      childList: true,
      subtree: true,
    });
  }
  // Check if the element is currently in the DOM
  check();
};

function check() {
  // Check the DOM for elements matching a stored selector
  for (let i = 0, len = listeners.length, listener, elements; i < len; i++) {
    listener = listeners[i];
    // Query for elements matching the specified selector
    elements = doc.querySelectorAll(listener.selector);
    for (let j = 0, jLen = elements.length, element: any; j < jLen; j++) {
      element = elements[j];
      // Make sure the callback isn't invoked with the
      // same element more than once
      if (!element.ready) {
        element.ready = true;
        // Resolve with the element
        listener.fn.call(element, element);
      }
    }
  }
}
