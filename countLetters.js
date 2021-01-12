const countLetters = function(word) {
  let obj = {};
  for (let letter of word) {
    if (letter in obj) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  
  }
  return obj;
};

module.exports = countLetters;