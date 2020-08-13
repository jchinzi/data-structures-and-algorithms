// Problem Domain: Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

// Code

function binarySearch(arr, key){
  let i = 0;
  let j = arr.length;
  let matching = -1
  let midpoint = Math.ceil((j+i)/2);
  while ((midpoint!==i)&&(midpoint!==j)&&(matching === -1) ){
  let matchCheck = arr[midpoint];
    if(matchCheck === key){
      matching = midpoint;
      return matching;
    } else if (matchCheck < key){
      i = midpoint;
      midpoint = Math.ceil((j+i)/2);
    } else if (matchCheck > key){
      j = midpoint;
      midpoint = Math.ceil((j+i)/2);
    }
  }
  return matching;
}

module.exports = binarySearch;