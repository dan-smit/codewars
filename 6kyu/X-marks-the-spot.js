// Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle. The X will be represented by 1's and the rest will be 0's.
// E.g.

// x(5) === [[1, 0, 0, 0, 1],
//           [0, 1, 0, 1, 0],
//           [0, 0, 1, 0, 0],
//           [0, 1, 0, 1, 0],
//           [1, 0, 0, 0, 1]];
          
// x(6) === [[1, 0, 0, 0, 0, 1],
//           [0, 1, 0, 0, 1, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 1, 0, 0, 1, 0],
//           [1, 0, 0, 0, 0, 1]];

//My Solution

function x(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push([]);
      for (let j = 0; j < n; j++) {
       array[i].push(i === j || i + j === n - 1 ? 1 : 0);
      }
    }
    return array;
  }