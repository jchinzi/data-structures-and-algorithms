'use strict'

function mergeSort(arr){

let n = arr.length;
if(n < 2) {
  return arr;
}

const mid = Math.floor(n/2);
const left = arr.slice(0, mid);
const right = arr.slice(mid, n);
return merge(mergeSort(left), mergeSort(right));


function merge(left, right){

  const result = [];

  while(left.length && right.length){
    if(left[0] <= right [0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while(left.length){
    result.push(left.shift());
  }

  while (right.length){
    result.push(right.shift());
  }

  return result;
};

};

module.exports = mergeSort

// Thank you to Bernard Johnson => YouTube Tutorial for assistance and the tip to use .shift() to make the code a little cleaner compared to i/j/k counters
// https://www.youtube.com/watch?v=ppNZ4bmrmGs&ab_channel=BernardJohnson