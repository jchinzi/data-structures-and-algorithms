
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