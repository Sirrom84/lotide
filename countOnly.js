// TEST ASSERT EQUALS
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`❌ Assertion failed: ${actual} != ${expected}`);
//   }
// };

const countLetters = require("./countLetters");

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      
    
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      console.log(item);
  
    }
  }

  return results;
};



module.exports = countOnly;
