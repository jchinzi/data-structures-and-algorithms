# Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.
# Built In Method => list.reverse()

def reverse_array(arr):
  reversed_list = []

  for num in reversed(list):
    reversed_list.append(num)

  return reversed_list