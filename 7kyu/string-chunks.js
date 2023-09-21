// You should write a function that takes a string and a positive integer n, splits the string into parts of length n and returns them in an array. It is ok for the last element to have less than n characters.

// If n is not a number or not a valid size (> 0) (or is absent), you should return an empty array.

// If n is greater than the length of the string, you should return an array with the only element being the same string.

// Examples:

// stringChunk('codewars', 2) // ['co', 'de', 'wa', 'rs']
// stringChunk('thiskataeasy', 4) // ['this', 'kata', 'easy']
// stringChunk('hello world', 3) // ['hel', 'lo ', 'wor', 'ld']
// stringChunk('sunny day', 0) // []

//My Solution

function stringChunk(str, n) {
    if (n <= 0 || typeof n !== 'number') return [];
    if (str.length < n) return [str];
    let retArr = [];
    let currentChunk = '';

    for (let i = 0; i < str.length; i++) {
        currentChunk += str[i];

        if (currentChunk.length === n || i === str.length - 1) {
            retArr.push(currentChunk);
            currentChunk = '';
        }
    }

    return retArr;
}

/* Good Solution

function stringChunk(str, n) {
  var a = [];
  for (var i = 0; n > 0 && i < str.length; i += n) {
    a.push(str.substring(i, i+n));
  }
  return a;
}

*/