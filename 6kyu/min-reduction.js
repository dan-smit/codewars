// Given an array of integers, find the minimum number of elements to remove from the array so that the square root of the largest integer in the array is less or equal to the smallest number in the same array.

// x = smallest integer in the array

// y = largest integer in the array

// Find the minimum number of elements to remove so, √y ≤ x.

// Example
// A = {3, 6, 5, 9, 16}
// min=3 max=16

// √16 > 3

// remove 16, so largest element becomes 9.

// √9 ≤ 3

// so

// minRemove(A) = 1
// since only 16 was removed.

// Note
// If all integers in the array are equal, then it wouldnt make any sense to reduce the array any further, so return 0.

// minRemove({2}) //=> 0
// minRemove({6,6,6,6}) //=> 0
// minRemove({6,6,6,2}) //=> 1

//My Solution

function minRemove(arr) {
    let l = arr.length;
    let [minNum, maxNum] = [Math.min(...arr), Math.max(...arr)]
    if (minNum ** 2 >= maxNum) {
      return l - arr.length;
    } else {
      return Math.min(
        ...[minNum, maxNum].map(num =>
          minRemove(arr.filter(el => el !== num))
        )
      );
      }
  }
  