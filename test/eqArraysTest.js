const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');



let testNums1 = [1,2,3,4,5];
let testNums3 =[11,12,13,14,15,16];

console.log(eqArrays([1, 2, 3, 4], [1, 2, 3])) //false
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3])) //true

console.log(assertEqual(eqArrays([1, 2, 3, 4], testNums3), `🥴 ${false} these arrays are not even the same length`));
console.log(assertEqual(eqArrays(testNums1, [2,3,4,5,6]), `🤔 ${false} these are not a perfect match`));
console.log(assertEqual(eqArrays(testNums1, [1,2,3,4,5]), `😍 ${true} looks like these arrays are perfect match of eachother`));