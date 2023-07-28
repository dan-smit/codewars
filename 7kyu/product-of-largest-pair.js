// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
// All inputs will be valid.
// Passing [2, 6, 3] should return 18, the product of [6, 3].

// Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

// maxProduct([2, 1, 5, 0, 4, 3])              // 20
// maxProduct([7, 8, 9])                       // 72
// maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874

//My Solution

function maxProduct(a) {
    let max = 0
    let max2 = 0
    for(let i=0; i<a.length; i++){
      if(a[i] > max){
        max2 = max
        max = a[i]
      }else if(a[i] > max2){
          max2 = a[i]   
      }
    }
    return max * max2
  }
  
  /* Too slow (my original solution)
function maxProduct(a) {
  let aSort = a.sort((a,b) => b-a)
  return a[0] * a[1]
}
  */

  /* Interesting solution
function maxProduct(a) {
    let largestVal = a.splice((a.indexOf(Math.max(...a))),1)
    let secondVal = a.splice((a.indexOf(Math.max(...a))),1)
    return largestVal*secondVal
}
  */