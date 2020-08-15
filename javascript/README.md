
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

---

# Singly Linked List
Create a Node class capable of generating a singly linked list that includes methods to insert a new node at the head, check for values present in the list, and return a string of all values in the list per specific formatting instructions.

## Challenge

* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
* Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
* Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
* Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
* Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

## Approach & Efficiency

LinkedList builds off of a Node class by creating new instances of Node that can be either prepended (with insert()) or appended(with append()).  The insert() method has an O value of 1 in that it functions the same way no matter how long the string may be.  Append() and toString() have an O value of n because both needs to traverse the full length of the list before the function can be completed.  Similarly, includes() has a maximum O value of n because if the value does not exist or exists in the final node, the full list will need to be traversed.

## API

* insert() takes in a value and inserts a new node at the head of the list containing that value

* append() takes in a value and inserts a new node at the end of the list containing that value

* includes() takes in a value and traverses the list, checking for that value at each node.  If the value is found, a boolean of true is returned, else a boolean of false is returned

* toString() returns a string containing all values in the list in the order that they are found, ending in NULL to indicate the end of the list