const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert.deepEqual;



describe("#head", () => {
  it("returns '2' for [1, 2, 3]", () => {
    assert(middle([1, 2, 3]), [2]);
  });
});

describe("#head", () => {
  it("returns '[2,3]' for [1, 2, 3]", () => {
    assert(middle([1, 2, 3, 4]), [2,3]);
  });
});

describe("#head", () => {
  it("returns '3' for 1, 2, 3, 5, 5]", () => {
    assert(middle([1, 2, 3, 5, 5]), [3]);
  });
});



