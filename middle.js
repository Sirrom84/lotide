// TEST/ASSERTION FUNCTIONS
//const assertArraysEqual = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return console.log(`🛑 These arrays are not the same length`);
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return console.log(`❌ ${array1} !== ${array2}`);
//     }
//   }
//   return console.log(`✅ Assertion passed ${array1} === ${array2}`)
// };

// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };


const middle = function(arrayToMiddle) {
  let index = [];
  let emptyArray = [];
  if (arrayToMiddle.length <= 2) {
    return emptyArray;
  } else if (arrayToMiddle.length % 2 !== 0) {
    index.push(Math.round(arrayToMiddle.length / 2));
    return index;
  } else if (arrayToMiddle.length % 2 === 0) {
    index.push(arrayToMiddle.length / 2,arrayToMiddle.length / 2 + 1);
    return index;
  }
};