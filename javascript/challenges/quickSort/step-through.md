**Problem Domain:** Quick Sort

**Pseudocode:**

``` 
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```
**Sample Array:** [8,4,23,42,16,15]: 

Quicksort is a recursive divide-and-conquer sorting method.

It begins by taking in an array (sample array above) as well as a left value and a right value.  For the initial call of the sort method, these values will be 0 and array.length-1, respectively.  

```
quickSort(sampleArray, 0, sampleArray.length-1);
```

The function first confirms that the array has more than one index by checking to see if the left value (0) is >= the right value (in this case, 5);  We pass this check and continue on.

We set an index by calling the nested function partition on our inputs of arr, left, and right.

Partition sets a pivotIndex equal to the supplied left value and a pivotValue equal to the array at the index of the right value.

We then enter a for loop that will run the length of the array provided.  For each index, we will compare the value at that index against our pivotValue.  If the value at i is greater than the pivotValue, nothing will happen.  However, if the value at i is less than the pivotValue, we will use the nested swap function to swap the values of arr[i] and arr[pivotIndex] and then increment the pivotIndex before continuing on in our for loop

On our first pass, we begin with the following values:  
Pivot Index: 0  
Pivot Value: 15  

When i = 0, arr[i] = 8  
Because 8<15, we swap the value of arr[i] with arr[0]  
However, at the moment i = 0, so no function change happens.  However, we also increment our pivot index at this time.  So now,

Pivot Index: 1  
Pivot Value: 15  
when i = 1, arr[i] = 4  

Much like our previous cycle, 4<15 so we swap the value of arr[i] with arr[1]  
However, at the moment i = 1, so no function change happens.  However, we also increment our pivot index at this time.  So now,

Pivot Index: 2  
Pivot Value: 15  
when i = 2, arr[i] = 23

Because 23 !< 15 we do not swap values and our pivotIndex does not increment

The for loop will continue uninterrupted because all remaining values in the array are also greater than 15.  Once the for loop completes, we perform one final swap between arr[pivotIndex] and arr[right].  Because our pivotIncrease never incremented above 2, that means we will be swapping the values 23 and 15.  Our original array is now slightly more sorted:

[8,4,15,42,16,23]

At the conclusion of the partition function, the pivotIndex of 2 is returned and set as the index value of the quickSort function that originally called it.

quickSort is then recursively called on both halves of the original array with the index serving as the break point.

First, quicksort is rerun on the array with new left and right values of left and index-1 (in this case, 0 and 1, respectively).

Because 0 !>=1 we pass the first check and reenter partition with our new left and right values.

On our first pass this time, we begin with the following values:  
Pivot Index: 0  
Pivot Value: 4  

The for loop could only possibly run once in this case, and it fails because arr[0] = 8.  As 8 !<4 we do not enter the if statement and instead go directly to the final swap of pivotIndex and right.  4 and 8 swap places, making the array now:

[4,8,15,42,16,23]

and the pivotIndex of 0 is returned as the new quickSort index value.

However, at this stage any further quickSort calls on the left side of the array would fail as the right value would be set to -1 and 0 > -1.  

Therefore, we enter the quickSort of the right side of the array using our earlier index of 2 (originally returned at the end of the first partition call), which translates to quickSort(arr, 3, right).

This passes our check, because the right value is 5 and 3 !>= 5 so we can move on to the partition function.

On our first pass this time, we begin with the following values:  
Pivot Index: 3  
Pivot Value: 23  

When i = 3, arr[i] = 42  

Because 42 !< 23, our for loop continues.  

When i = 4, arr[i] = 16

Because 16<23, we swap the value of arr[i] with arr[3] so that our array becomes:  

[4,8,15,16,42,23]

we also increment our pivot index at this time.  So now,

Pivot Index: 4  
Pivot Value: 23  
  
This ends our for loop, so we perform the final swap between pivotIndex and right:

[4,8,15,16,23,42]

4 is returned as the new index.  However, running quicksort on the right again will fail because our index of 4 means that our right and left values would now be 5 and 5 respectively.

Having completed both recursive quickSort calls, the sorted version of our array is returned.

---

Big O Efficiency:  

Time: O(n log(n)) - typical of divide and conquer sort methods, time efficiency is based on first dividing the initial array into smaller arrays to be sorted before rejoining.

Space: O(n) - my understanding is that this method typically requires O(log(n)) because many versions include creating a new array to avoid mutating the orginal array - however the version here does sort the array in place and returns the mutated original array, meaning that it is a bit more efficient with space. 