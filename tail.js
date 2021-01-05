const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion failed: ${actual} != ${expected}`);
  }
};

const tail = function(array) {
  let output = [];
  for (let i = 1; i <= array.length - 1; i++) {
    output.push(array[i]);
  }
  return output;
};

console.log(tail([1,2,3,4,5]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);