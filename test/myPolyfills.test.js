const expect = require('chai').expect;
const myPolyfills = require('../myPolyfills');

describe('Testing myPolyfills', () => {
  before(() => {
    myPolyfills();
  })

  describe('Testing myMap', () => {

    it('Check - wrong type', () => {
      function badFn()  {
        Array.prototype.myMap.call(true, (value) => value)
      };
      expect(badFn).to.throw(TypeError);
    });

    it('check - no callback', () => {
      function badFn() {
        [1,2,3].myMap()
      };
      expect(badFn).to.throw(TypeError)
    });

    it('Check - simple loop', () => {
      expect(
        [1,2,3,4].myMap((item) => item + 10)
      ).to.deep.equal(
        [1,2,3,4].map((item) => item + 10)
      );
    });

    it('Check - string', () => {
      expect(
        Array.prototype.myMap.call('test', (value) => `${value},`)
      ).to.deep.equal(
        Array.prototype.map.call('test', (value) => `${value},`)
      )
    });

    it('Check - properties', () => {
      const arr = [1,2,3,4];
      expect(arr.myMap((item, index, arr) => [item, index, arr])
      ).to.deep.equal(
        arr.map((item, index, arr) => [item, index, arr])
      );
    });

    
  }
  )
})