module.exports = function () {
  if(!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
      if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError('Array.prototype.myMap was called on wrong type');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(`Array.prototype.myMap ${callback} is not a function`);
      }
      
      const result = [];
      for(let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
      }
      return result;
    };
  }

  if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function(callback, initValue) {
      if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError('Array.prototype.myReduce was called on wrong type')
      }
      if (typeof callback !== 'function') {
        throw new TypeError(`Array.prototype.myReduce ${callback} is not a function`)
      }
      
      let acc = arguments.length >= 2 ? initValue : this[0];
      let isStart = arguments.length >= 2 ? 0 : 1;
      for(let i = isStart; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
      }
      return acc;
    }
  }
}