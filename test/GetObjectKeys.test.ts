import * as chai from 'chai';
import { GetObjectKeys } from '../src/index';

const expect = chai.expect;

describe('Function - GetObjectKeys', () => {
  it('should return empty array if object contains no keys', () => {
    const emptyObj = {};
    expect(GetObjectKeys(emptyObj)).to.be.an('array').that.is.empty;
  });
  it('should return Array of object keys if object contains keys', () => {
    const obj = {key: 'someValue', anotherKey: true};
    expect(GetObjectKeys(obj)).to.be.an('array').that.does.include.members(['key', 'anotherKey']);
  })
});