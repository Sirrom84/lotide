const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays =require(`./eqArrays`);
const middle = require(`./middle`)
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countletters = require('./countLetters');
const countOnly = require('./countOnly')
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require ('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head,
  tail, 
  middle,
  eqArrays,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countletters,
  countOnly,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without
 };