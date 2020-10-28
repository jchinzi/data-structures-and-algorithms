import unittest

# Errors with import? Need to look into

# target = __import__("array_reverse.py")
# reverse_array = target.reverse_array

class TestReverseArray(unittest.TestCase):
  def test_reverse_array(self):
    input_arr = [1, 2, 3, 4, 5, 6]
    result = reverse_array(input_arr)
    expected_out = [6, 5, 4, 3, 2, 1]
    self.assertEqual(result, expected_out)

if __name__ == '__main__':
  unittest.main()