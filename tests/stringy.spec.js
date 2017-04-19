/*jshint esversion:6*/
const chai = require('chai');
const expect = chai.expect;
const stringy = require('../stringy.js');
describe('stringCheck()', () => {
  it('should take in two paramaters - a source string and a substring to be found',  () => {
    expect(stringy(['hey'], 'yo')).to.equal(false);
    expect(stringy('hey', {hey: 'hi'})).to.equal(false);
  });
  it('should look for substring within source string', () => {
    expect(stringy('firetruck', 'fir')).to.equal(true);
    expect(stringy('firetruck', 'retro')).to.equal(false);
  });
});