const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return `🥴 ${false} these arrays are not even the same length`
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `🤔 ${false} these are not a perfect match`;
    }
  }
  return `😍 ${true} looks like these arrays are perfect match of eachother`
};

module.exports = eqArrays;