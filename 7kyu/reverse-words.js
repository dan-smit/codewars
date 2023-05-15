// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//My Solution

function reverseWords(str) {
    let retStr = ''
    let retArr;
    let strArr = str.split(' ') 
    for(let i=0; i<strArr.length; i++){
      retStr += strArr[i].split('').reverse().join('') + ' '
    }
    retArr = retStr.split('')
    retArr.pop()
    return retArr.join('')
  }