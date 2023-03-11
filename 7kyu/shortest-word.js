// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//My Solution

function findShort(s){
    let sArr = s.split(' ')
    let shortestLength = s.split(' ')[0].length
    for(let i=0; i<sArr.length; i++){
      if(sArr[i].length < shortestLength){
        shortestLength = sArr[i].length
      }
    }
    return shortestLength
  }