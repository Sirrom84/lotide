const tail = require('../tail')
const assertEqual = require('../assertEqual');
const assert = require('chai').assert.deepEqual;






describe("#head", () => {
  it("returns '[2,3]' for [1, 2, 3]", () => {
    assert(tail([1, 2, 3]), [2,3]);
  });
});
describe("#head", () => {
  it("returns '[2,3,4]' for [1, 2, 3]", () => {
    assert(tail([1, 2, 3, 4]), [2,3,4]);
  });
});
describe("#head", () => {
  it("returns ['World'] for ['Hello','World']", () => {
    assert(tail(['Hello', 'World']), ['World']);
  });
});
