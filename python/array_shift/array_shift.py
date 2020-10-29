# Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

def array_shift(list, val):
  midpoint = round(len(list)/2)
  list.insert(midpoint, val)
  return list
