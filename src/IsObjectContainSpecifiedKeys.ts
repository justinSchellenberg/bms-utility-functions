/**
 * @param {object} obj - Object to determine the keys
 * @param {number} numberKeys - The number of keys to check that the object has
 * @returns {boolean} - Returns true if the object contains the amount of keys specified, Else, returns false.
 * @description - Function to check if object contains the numberKeys specified.
 */
export default function IsObjectContainSpecifiedKeys(obj: object, numberKeys: number): boolean {
  return Object.keys(obj).length === numberKeys; // :TODO Expand on this, check if keys are truthy
}
