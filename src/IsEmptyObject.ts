/**
 *
 * @param {object} obj - Object to check
 * @returns {boolean} - Returns true of object contains no keys, else, returns false if it contains keys.
 * @description - Function to Determine if an object is empty or not
 */
export default function IsEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0; // :TODO Expand on this, check if keys are truthy
}
