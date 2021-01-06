// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`❌ Assertion failed: ${actual} != ${expected}`);
//   }
// };


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// console.log(eqArrays([1, 2, 3, 4], [1, 2, 3])) //false
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
// console.log(eqArrays([1, 2, 3], [1, 2, 3])) //true

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // true 
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "5"])); //false