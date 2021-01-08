const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if ((obj1[key]) !== (obj2[key])) {
      return false;
    }
  } return true;
};


const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion failed: ${actual} != ${expected}`);
  }
};

