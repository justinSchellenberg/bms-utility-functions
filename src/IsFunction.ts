/**
 * @description - Given a variable, determines if that variables type is of function
 * @param functionToCheck - The variable to determine if of type function
 * @returns {boolean} - Returns true if variable type is function, else false
 */
export default function IsFunction(functionToCheck: any): boolean{
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}