const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');





eqArrays([1, 2, 3, 4], [1, 2, 3]) //false
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays([1, 2, 3], [1, 2, 3]) //true

