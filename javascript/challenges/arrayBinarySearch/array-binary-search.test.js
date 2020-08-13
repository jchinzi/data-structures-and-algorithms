const binarySearch = require('./array-binary-search');


describe('Array Binary Search - Less Than', () => {
  test('It should return the index position of a value that is less than the midpoint value', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
  });
});

describe('Array Binary Search - More Than', () => {
  test('It should return the index position of a value that is less than the midpoint value', () => {
    expect(binarySearch([4,8,15,16,23,42], 42)).toStrictEqual(5);
  });
});

describe('Array Binary Search - Value Not Present', () => {
  test('It should return a -1 if the value is not present in the array', () => {
    expect(binarySearch([4,8,15,16,23,42], 12)).toStrictEqual(-1);
  });
});
