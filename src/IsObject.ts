/**
 *
 * @param variable - a Variable to test
 * @returns {boolean} - Return true if variable is an object, else returns false
 */
export default function isObject(variable: any): boolean {
  return typeof variable === 'object' && !Array.isArray(variable) && variable !== null;
}
