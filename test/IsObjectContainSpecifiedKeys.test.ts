import * as chai from 'chai';
import { IsObjectContainSpecifiedKeys } from '../src/index';

const expect = chai.expect;

describe('Function - IsObjectContainSpecifiedKeys', () => {
  it('should return true if object matches keys specified', () => {
    const emptyObj = {};
    expect(IsObjectContainSpecifiedKeys(emptyObj, 0)).to.be.true;
  });
  it('should return false if object Does not contain keys specified', () => {
    const obj = {key: 'someValue'};
    expect(IsObjectContainSpecifiedKeys(obj, 4)).to.be.false;
  });
});