// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

// If a word starts with a number or special character, skip the word and leave it out of the result.

// Input String will not be empty.

// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

//My Solution

function capitalsFirst(str){
    let strArr = str.split(' ')
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    let caps = strArr.filter(el => el[0] === el[0].toUpperCase() && alph.includes(el[0].toLowerCase()))
    let lower = strArr.filter(el => el[0] !== el[0].toUpperCase() && alph.includes(el[0].toLowerCase()))
    return caps.concat(lower).join(' ')
  }