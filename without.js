// const assertArraysEqual = function(array1, array2) {
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


const without = (sourceArray, itemsToRemove) => {
  const reducer = (accumulator, currentValue) => {
    if (itemsToRemove.indexOf(currentValue) === -1) {
      return accumulator.concat(currentValue);
    } else {
      return accumulator;
    }
  };
  return sourceArray.reduce(reducer, []);
}
  
