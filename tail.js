const tail = function(array) {
  let output = [];
  for (let i = 1; i <= array.length - 1; i++) {
    output.push(array[i]);
  }
  return output;
};


module.exports = tail