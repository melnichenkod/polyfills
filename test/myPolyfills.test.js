const expect = require('chai').expect;
const myPolyfills = require('../myPolyfills');

describe('Testing myPolyfills', () => {
  before(() => {
    myPolyfills();
  })
})