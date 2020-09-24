'use strict';

// Note - this version of leftJoin is built to work with JavaScript Objects.  To use custom hashtables, some modifications would be required

function leftJoin(obj1, obj2){
  let returnArray = Object.entries(obj1);
  returnArray.forEach(array => {
    let key = array[0];
    if(obj2[key]){
      array.push(obj2[key]);
    } else {
      array.push(null);
    }
  })
  return returnArray;
  }
  
module.exports = leftJoin