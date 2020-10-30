# Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.
# NOTE: The search algorithm used in your function should be a binary search.

def array_binary_search(sorted_list, key):
  start = 0
  end = len(sorted_list)-1
  matching = -1
  midpoint = round((start + end)/2)
  while ((midpoint != start) and (midpoint != end) and (matching == -1) ):
    match_check = sorted_list[midpoint]
    if match_check == key:
      matching = midpoint
      return matching
    elif match_check < key:
      start = midpoint
      midpoint = round((start + end)/2)
    else:
      end = midpoint
      midpoint = round((start+end)/2)
  return matching
