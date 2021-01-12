const eqArrays = require('./eqArrays');


const assertArraysEqual = function(actualArray, excpectedArray) {
  return eqArrays(actualArray,excpectedArray);
};

 
module.exports = assertArraysEqual;

