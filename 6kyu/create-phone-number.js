// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

//My Solution

function createPhoneNumber(numbers){
  numbers = numbers.map((val, ind) => {
    if(ind == 0){
      return '(' + val
    }else if(ind == 2){
      return val + ') ' 
    }else if(ind == 5){
      return val + '-'
    }else return val
  })
  return numbers.join('')
}