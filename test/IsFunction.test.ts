import * as chai from 'chai';
import { IsFunction } from '../src/index';

const expect = chai.expect;



describe('Function - IsFunction', () => {
  const func = () => {
    return 'I am a function';
  };
  const another = () => {
    return;
  };
  it('should return true if variable is of type function', () => {
    expect(IsFunction(func)).to.be.true;
    expect(IsFunction(another)).to.be.true;
  });
  it('should return false if variable is an object, string, number, boolean', () => {
    const obj = {key: 'someValue'};
    const str = 'I am a string';
    const number = 44;
    const bool = false;
    const date = new Date();
    const funcArray = [func, another];
    expect(IsFunction(obj)).to.be.false;
    expect(IsFunction(str)).to.be.false;
    expect(IsFunction(number)).to.be.false;
    expect(IsFunction(bool)).to.be.false;
    expect(IsFunction(date)).to.be.false;
    expect(IsFunction(funcArray)).to.be.false;

  });
});
