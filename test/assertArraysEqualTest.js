const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual([1,2,3,4,5], [1,1,1,1,1]); //fail
assertArraysEqual([1,2,3,4,5], [1,2,3,4,5]); // pass
assertArraysEqual([1,2,3,4,5], [1,1,1,1,4]); //fail
assertArraysEqual([1,1,1,1,1], [1,1,1,1,1])//pass