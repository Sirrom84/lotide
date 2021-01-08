const words = ["Rza", "Gza", "ODB", "Raekwon", "Ghost"]; //test1
// const words = ["hello", "goodbye", "test"];   //test2
// // const words = ["one", "two", "three", "four"];  //test3



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
};


console.log(assertEqual(results1,['R', 'G', 'O', 'R', 'G']));  //test1
// console.log(assertEqual(results1,['h', 'g', 't']));    //test2
// // console.log(assertEqual(results1,['o', 't', 't', 'f'])); //test3

