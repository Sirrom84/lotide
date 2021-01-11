const letterPositions = function(word) {
  word = word.toLowerCase();
  let obj = {};
  
  for (let i = 0; i < word.length; i++) {
    let key = word[i];
    
    if (obj[key]) {
      obj[key].push(i);
    } else if (!obj[key] && key !== " ") {
      obj[key] = [i];
    } else {
      continue;
    }
  }
  return obj;
};
