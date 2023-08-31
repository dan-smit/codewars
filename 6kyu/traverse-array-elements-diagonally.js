// In this kata you're given an n x n array and you're expected to traverse the elements diagonally from the bottom right to the top left.

// Example
//   1 6 7
//   7 2 4
//   3 5 9
// your solution should return elements in the following order

// 9
// 4 5
// 7 2 3
// 6 7
// 1
// //=> [9, 4, 5, 7, 2, 3, 6, 7, 1]

// Your task is to write the function diagonal() that returns the array elements in the above manner.

// My Solution

function diagonal(arr){
    let n = arr.length - 1
    let result = []

    while(arr[0].length){
        arr.forEach((innerArr, index) => {
            if(!innerArr.length){
                return;
            }
            if(index >= n) {
                result.push(innerArr.pop())
            }
        })
        n--
    }
    return result
}