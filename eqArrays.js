const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
   let isNotSameLength = console.log(`🥴  these arrays are not even the same length`);
   return isNotSameLength;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
    let isNotMatch = console.log(`🤔 these are not a perfect match`);
    return isNotMatch;
    }
  }
  isGood = console.log(`😍 looks like these arrays are perfect match of eachother`);
 return isGood;
};

module.exports = eqArrays;
