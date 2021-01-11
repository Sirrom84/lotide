// TESTING ASSERTION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`❌ Assertion failed: ${actual} != ${expected}`);
//   }
// };


const findKeyByValue = function(object,value) {
  return Object.keys(object).find(key => object[key] === value);
};

