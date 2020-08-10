// Problem Domain: Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.


// Code

function reverseArray(arr){
  let reversedArray = [];
  for(let i=arr.length; i--; i>-1){
    reversedArray.push(arr[i])
  }
  return reversedArray;
}
