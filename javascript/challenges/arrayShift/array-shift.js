function insertShiftArray(arr, val){
  let midpoint = Math.round(arr.length / 2);
  let newArray = [];
  for (let i=0; i<midpoint; i++){
    newArray.push(arr[i])
  }
  newArray.push(val);
  for (let i=midpoint; i<arr.length; i++){
    newArray.push(arr[i])}
  return newArray;
}

