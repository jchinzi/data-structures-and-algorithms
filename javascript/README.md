
# Reverse an Array
Given an array of numbers, reverse the array without using any built-in methods meant for that purpose.

## Challenge
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Approach & Efficiency
I set up an empty array (reversedArray) and then set up a for loop iterating over every index position of the original array beginning with the last one.  For each index position I pushed the value of the original array into the new array, resulting in a revered order of the same values.

## Solution
![Whiteboard Image](challenges/arrayReverse/arrayReverse.jpg)

---

# Insert Shift Array
Given an array of numbers and a value, add the value to the center of the array without using any built-in methods meant for that purpose.

## Challenge
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index

## Approach & Efficiency
First I set a variable to the midpoint by dividing the length of the array in two and rounding the return.  Then I created an empty array (newArray).
Next I did an initial for loop with a maximum value of i equal to the midpoint.  Using that loop, I pushed the first half of the initial array into the new array.
Once that was complete, I pushed the value provided into the new array.
Finally I did another for loop, this time with an initial i value equal to the midpoint and a maximum value of the length of the array.  Using this loop, I pushed the remaining values from the original array into the new array.
This way the new value will always be nested in the center of the array and no values will be lost.  The method works for both even and odd length arrays.

## Solution
![Whiteboard Image](challenges/arrayShift/array-Shift.jpg)

---

# Array Binary Search
Given a sorted array of numbers and a value, determine if that value is within the array using a binary search.  If the value is in the array, return the index position of the value.  If the value is not in the array, return -1.

## Challenge
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency

Set a midpoint variable equal to the ‘middle index’
Compare search key to value of array at midpoint index
IF they are equal, return midpoint index
IF the key value is > the array value at midpoint index, redefine the midpoint based on the remaining array values greater than the midpoint and recheck for a match
IF the key value is < the array value at midpoint index, redefine the midpoint based on the remaining array values less than the midpoint and recheck for a match
This loop should be able to continue until either:
The key matches a midpoint and an index is returned OR
A midpoint does not exist (indicating all values have been checked) and a -1 is returned

## Solution
![Whiteboard Image](challenges/arrayBinarySearch/binarysearch.png)