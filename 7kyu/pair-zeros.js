// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.

// Examples
// input: [0, 1, 0, 2]
// paired: ^-----^
//     -> [0, 1,   2]
//   kept: ^

// input: [0, 1, 0, 0]
// paired: ^-----^
//     -> [0, 1,    0]
//   kept: ^        ^

// input: [1, 0, 7, 0, 1]
// paired:    ^-----^
//     -> [1, 0, 7,    1]
//   kept:    ^

// input: [0, 1, 7, 0, 2, 2, 0, 0, 1, 0]
// paired: ^--------^        ^--^
//     -> [0, 1, 7,    2, 2, 0,    1, 0]
//   kept: ^                 ^        ^

//My Solution

function pairZeros(arr) {
    var seenZero = 0;
    return arr.filter(function(num){
      return num != 0 || seenZero++ % 2 == 0;
    });
  }