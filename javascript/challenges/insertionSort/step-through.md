**Problem Domain:** Insertion Sort

**Pseudocode:**

``` 
 InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```
**Sample Array:** [8,4,23,42,16,15]: 

*Starting Order:*  
We'll consider index 0 as ‘sorted’ and begin our for loop at i=1

[8,4,23,42,16,15]

---

*Sort Index 1*  
i = 1 / j = 0   
[8,4,23,42,16,15]  
-^-^------------  
-j-i------------  
temp = 4 / arr[j] = 8  


Because temp < arr[j], we move arr[j] one index position to the right, decrease j by one and check again  

i = 1 / j = -1   
[4,8,23,42,16,15]  
^--^------------  
j--i------------  


j is now less than 0, so the while loop fails.  The 'temp' value of 4 is assigned to the index of j+1 (arr[0]) and we move forward with our for loop

---

*Sort Index 2*  
i = 2 / j = 1   
[4,8,23,42,16,15]  
---^-^----------  
---j-i----------  
temp = 23 / arr[j] = 8  

This time, temp is greater than arr[j] so we never enter the while loop.  Instead, temp is immediately assigned to the index of j+1 (arr[2]), which happens to be where it already was, so there is no material change to the array this step.  

---

*Sort Index 3*  
i = 3 / j = 2   
[4,8,23,42,16,15]  
------^-^-------  
------j-i-------  
temp = 42 / arr[j] = 23  

Just like last time, temp is greater than arr[j] so we never enter the while loop.  Instead, temp is immediately assigned to the index of j+1 (arr[3]), which happens to be where it already was, so there is no material change to the array this step.  

---

*Sort Index 4*  
i = 4 / j = 3  
[4,8,23,42,16,15]  
---------^-^----  
---------j-i----  
temp = 16 / arr[j] = 42  

Because temp < arr[j], we move arr[j] one index position to the right, decrease j by one and check again  

i = 4 / j = 2  
[4,8,23,16,42,15]  
------^----^----  
------j----i----  
temp = 16 / arr[j] = 23  

In this case, temp is still < arr[j], so we repeat the process of shifting arr[j] to the right and j to the left to check again

i = 4 / j = 1  
[4,8,16,23,42,15]  
---^-------^----  
---j-------i----  
temp = 16 / arr[j] = 8  

Now that temp is > arr[j] we can exit exit the while loop and assign our temp value to the index of j+1 (arr[2]) before moving forward in our for loop.

---

*Sort Index 5*

i = 5 / j = 4  
[4,8,16,23,42,15]  
------------^-^-  
-------------j-i-  
temp = 15 / arr[j] = 42  

Because temp < arr[j], we move arr[j] one index position to the right, decrease j by one and check again  

i = 5 / j = 3  
[4,8,16,23,15,42]  
---------^----^-  
---------j----i-  
temp = 15 / arr[j] = 23  

Again, temp < arr[j], so we move arr[j] one index position to the right, decrease j by one and check again  

i = 5 / j = 2  
[4,8,16,15,23,42]  
------^-------^-  
------j-------i-  
temp = 15 / arr[j] = 16  

Once more, temp < arr[j], so we move arr[j] one index position to the right, decrease j by one and check again  

i = 5 / j = 1  
[4,8,15,16,23,42]  
---^----------^-  
---j----------i-  
temp = 15 / arr[j] = 8  

Now that temp is > arr[j] we can exit exit the while loop and assign our temp value to the index of j+1 (arr[2]) before moving forward in our for loop.

---

*Sort Index 6*  
i = 6 / j = 5

Because the array length is 6, when i = 6 we will break out of the for loop and return the array in its present - sorted - state.

Return: [4,8,15,16,23,42]  

Big O Efficiency:  
Time: Each index in the array will need to be compared to at least one and up to all prior indexes before it is assigned to it's position in the array, so the time cost of this function is roughly O(n^2)  
Space: No additional space is required or created during this sort method as it alters the array in place.  Space cost is O(1) - constant.
