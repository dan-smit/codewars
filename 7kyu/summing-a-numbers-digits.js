// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

//My Solution

function sumDigits(number) {
    let arr = String(number).split('')
    arr = arr.map(el => el != 0 ? +el : Number('0'))
    arr.forEach(num => console.log(`num: ${num} is a ${typeof num}`))
    let sum = 0
    for(let i=0; i<arr.length; i++){
      if(typeof arr[i] == 'number' && !isNaN(arr[i])){
        sum+=arr[i]
      }
    }
    return sum
  }