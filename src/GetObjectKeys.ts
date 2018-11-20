/**
 *
 * @param {object} obj - An object to extract the keys from
 * @returns {string[]} - An Array of strings, each string containing a key from the object passed in.
 * @description - A function to return the Keys of an object back, returns as an array of strings containing the keys.
 */
export default function GetObjectKeys(obj: object): string[] {
  return Object.keys(obj);
}
