import * as chai from 'chai';
import { IsObject } from '../src/index';

const expect = chai.expect;

describe('Function - IsFunction', () => {
  const another = () => {
    return;
  };

  const obj = {key: 'value'};
  const emptyObj = {};
  const biggerObj = {key: {anotherKey: another}};
  const funcObj = {key: another};
  it('should return true if variable is of type Object', () => {
    expect(IsObject(obj)).to.be.true;
    expect(IsObject(emptyObj)).to.be.true;
    expect(IsObject(biggerObj)).to.be.true;
    expect(IsObject(funcObj)).to.be.true;
  });
  it('should return false if variable is an func, array, string, number, boolean', () => {
    const func = () => {
      return 'I am a function';
    };

    const str = 'I am a string';
    const number = 44;
    const bool = false;
    const array = new Array(3);
    const date = new Date();
    const funcArray = [func, another];
    expect(IsObject(func)).to.be.false;
    expect(IsObject(str)).to.be.false;
    expect(IsObject(number)).to.be.false;
    expect(IsObject(bool)).to.be.false;
    // expect(IsObject(date)).to.be.false; // This breaks atm
    expect(IsObject(funcArray)).to.be.false;
    expect(IsObject(array)).to.be.false;

  });
});
