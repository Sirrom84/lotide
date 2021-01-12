const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const without = (sourceArray, itemsToRemove) => {
  const reducer = (accumulator, currentValue) => {
    if (itemsToRemove.indexOf(currentValue) === -1) {
      return accumulator.concat(currentValue);
    } else {
      return accumulator;
    }
  };
  return sourceArray.reduce(reducer, []);
}
  
module.exports = without;