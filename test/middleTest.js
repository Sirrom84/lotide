const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');




assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);//pass
assertArraysEqual(middle([1, 2, 3, 4, 5]),[2]);//fail
assertArraysEqual(middle([1, 2, 3, 4, 5]),[2,5]);//fail
assertArraysEqual(middle([1, 2, 8, 4, 5]),[8]);//pass
