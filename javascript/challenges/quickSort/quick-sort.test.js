'use strict'

const quickSort = require('./quick-sort.js')

let testArray = [8,4,23,42,16,15];
let reverseArray = [20,18,12,8,5,-2];
let duplicateArray = [5,12,7,5,5,7];
let almostSortArray = [2,3,5,7,13,11];

it('should sort an unordered list of numbers passed in an array', () => {
  expect(quickSort(testArray, 0, testArray.length-1)).toEqual([4,8,15,16,23,42]);
})

it('should sort an reverse ordered list of numbers passed in an array', () => {
  expect(quickSort(reverseArray, 0, reverseArray.length-1)).toEqual([-2,5,8,12,18,20]);
})

it('should sort a list of numbers that includes repeated numbers passed in an array', () => {
  expect(quickSort(duplicateArray, 0, duplicateArray.length-1)).toEqual([5,5,5,7,7,12]);
})

it('should sort a nearly sorted list of numbers passed in an array', () => {
  expect(quickSort(almostSortArray, 0, almostSortArray.length-1)).toEqual([2,3,5,7,11,13]);
})