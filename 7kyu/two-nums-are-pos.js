// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false

//My Solution

function twoArePositive(a, b, c) {
    function cond(val){
      return val>0
    }
    if(cond(a) && cond(b) && !cond(c)) return true
    if(cond(a) && cond(c) && !cond(b)) return true
    if(cond(b) && cond(c) && !cond(a)) return true
    return false
  }

  /* Better Solution
function twoArePositive(a, b, c){
    return [...arguments].filter(i => i>0).length === 2
}
  */