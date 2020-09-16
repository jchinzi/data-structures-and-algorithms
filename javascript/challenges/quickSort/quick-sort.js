'use strict'

function quickSort(arr, left, right){
  if (left >= right){
    return;
  }

  let index = partition(arr, left, right);
  quickSort(arr, left, index-1);
  quickSort(arr, index+1, right);

  return arr;

  function partition(arr, left, right){
    let pivotIndex = left;
    let pivotValue = arr[right];

    for(let i = left; i<right; i++){
      if (arr[i] < pivotValue){
        swap(arr, i, pivotIndex);
        pivotIndex++
      }
    }
    swap(arr, pivotIndex, right);
    return pivotIndex;
  }

  function swap (arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

};

module.exports = quickSort

// Thanks to The Coding Train on youtube for a very helpful visualization tutorial: https://www.youtube.com/watch?v=eqo2LxRADhU&ab_channel=TheCodingTrain