// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .



//My solution

function tidyNumber(n){
    return [...n+=''].sort().join('')==n
  }