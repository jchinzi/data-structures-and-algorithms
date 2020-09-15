**Problem Domain:** Merge Sort

**Pseudocode:**

``` 
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```
**Sample Array:** [8,4,23,42,16,15]: 

First, the function confirms that the array provided is of a length greater than 1 (in this case, n = 6)  

Then, on an initial pass we get the values:  
mid = 3  
left = [8,4,23]  
right = [42,16,15]

When we reach merge, we call mergeSort recursively on left:

mid = 1  
left = [8]  
right = [4,23]

When we reach merge this time, left is a single index array but right is not, so we call mergeSort recursively on right:

mid = 1  
left = [4]  
right = [23]

This time when we hit merge we arrive with two singe index arrays and are able to complete our first merge:

left: [4]  
right: [23]  
result: [4,23]

We then enter merge again, this time with the following values of:

left: [8]  
right: [4,23]  
result: [4,8,23]

At this point our initial 'left' array has been sorted and we begin work on the initial 'right' array of [42,16,15].

The first pass at this array will split our values as follows:

mid = 1  
left = [42]  
right = [16,15]  

Like last time, our left value is now isolated but our right value will recursively trigger mergeSort again:

mid = 1  
left = [16]  
right = [15]

This time when we hit merge we arrive with two singe index arrays and are able to complete our first merge:

left: [16]  
right: [15]  
result: [15,16]

Next we'll merge this sorted right array with the single left array:

This time when we hit merge we arrive with two singe index arrays and are able to complete our first merge:

left: [42]  
right: [15,16]  
result: [15,16,42]

Our final merge will join the sorted left and right arrays:

This time when we hit merge we arrive with two singe index arrays and are able to complete our first merge:

left: [4,8,23]  
right: [15,16,42]  
result: [4,8,15,16,23,42]

This final result is returned by the function.

---

Big O Efficiency:  

Time: O(n log(n)) - as the original array is sorted in half and then re-merged after sorting

Space: O(n) - At any given time, we have an additional results array that contains up to n indexes representing some or all of the sorted elements of the initial array.  The new results array is returned rather than altering the original array in place.