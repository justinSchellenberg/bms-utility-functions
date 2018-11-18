export default function IsEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0; // :TODO Expand on this, check if keys are truthy
}
