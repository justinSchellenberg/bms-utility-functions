import * as chai from 'chai';
import { IsEmptyObject } from '../src/index';

const expect = chai.expect;

describe('Function - IsEmptyObject', () => {
  it('should return true if object is empty', () => {
    const emptyObj = {};
    expect(IsEmptyObject(emptyObj)).to.be.true;
  });
  it('should return false if object contains a key', () => {
    const obj = {key: 'someValue'};
    expect(IsEmptyObject(obj)).to.be.false;
  })
});