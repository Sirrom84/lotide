const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

describe('', () => {
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});




describe('', () => {
  it(`returns '4' for ["4,6,7]"`, () =>{
    assert.strictEqual(head([4,6,7]), 4)
  });
});


describe('', () => {
  it(`returns 'Hello' for ["Hello" , "LightHouse", "Labs" ]`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  })
});

