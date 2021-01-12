const assertEqual = require('./assertEqual');


const findKey = function(planetsObj, callback) {
  for (const planet in planetsObj) {
    const starsObj = planetsObj[planet];
    if (callback(starsObj)) {
      return planet;
    }
  }

};
module.exports =findKey;
// const result = findKey({
//  "Blue Hill": { stars: 1 },
//  "Akaleri":   { stars: 3 },
//  "noma":      { stars: 2 },
//  "elBulli":   { stars: 3 },
//  "Ora":       { stars: 2 },
//  "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

// assertEqual(result, "noma")

