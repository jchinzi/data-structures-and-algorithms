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

// ===============Tests==============

describe('Insert Shift Array - Even', () => {
  test('It should return a new array with the new value in the center index position', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
  });
});

describe('Insert Shift Array - Odd', () => {
  test('It should return a new array with the new value in the center index position', () => {
    expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
  });
});