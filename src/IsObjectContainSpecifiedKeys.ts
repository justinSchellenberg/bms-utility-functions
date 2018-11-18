export default function IsObjectContainSpecifiedKeys(obj: object, numberKeys: number): boolean {
  return Object.keys(obj).length === numberKeys; // :TODO Expand on this, check if keys are truthy
}
