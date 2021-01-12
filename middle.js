const middle = function (array) {
  let middleIndex = [];
  if (array.length <= 2) {
    middleIndex = [];
   
  } else if (array.length % 2 !== 0) {
    middleIndex = [array[Math.round(array.length / 2) - 1]];
   
  } else if (array.length % 2 === 0) {
    middleIndex = [
      array[Math.round(array.length / 2 - 1)],
      array[Math.round(array.length / 2)],
    ];
  }
  return middleIndex;
};

module.exports = middle;
