const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertObjectsEqual = ('./assertObjectsEqual');
const eqObjects = ('./eqObjects');
const without = ('./without');
const takeUntil = ('./takeUntil');
const countOnly = ('./countOnly'); 
const assertEqual = ('./assertEqual'); 
const assertArraysEqual = require ('./assertArraysEqual'); 
const map = require('./map');
const countLetters = require('./countLetters'); 
const findKey = require('./findKey'); 
const letterPositions = require ('./indexesOf');
const flatten = require ('./flatten');
const indexesOf = require ('./indexesOf');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertObjectsEqual: assertObjectsEqual,
  eqObjects: eqObjects,
  without: without,
  takeUntil: takeUntil,
  countOnly: countOnly, 
  assertEqual, assertEqual,
  assertArraysEqual, assertArraysEqual, 
  map: map, 
  countLetters: countLetters, 
  findKey: findKey, 
  letterPositions: letterPositions,
  flatten: flatten,
  indexesOf: indexesOf
};