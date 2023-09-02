// A list S will be given. You need to generate a list T from it by following the given process:

// Remove the first and last element from the list S and add them to the list T.
// Reverse the list S
// Repeat the process until list S gets emptied.
// The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

// Example
// S = [1,2,3,4,5,6]
// T = []

// S = [2,3,4,5] => [5,4,3,2]
// T = [1,6]

// S = [4,3] => [3,4]
// T = [1,6,5,2]

// S = []
// T = [1,6,5,2,3,4]
// return T
// Note
// size of S goes up to 10^6
// Keep the efficiency of your code in mind.
// Do not mutate the Input.

// My Solution

function arrange(s) {
    let S = [...s]
    let T = []
    let first = 0, len = s.length, last = len - 1
    let reverse = false;
    
    //run loop while there is atleast 1 element
    while(len > 0){
      if(len == 1){   //check for 1 element. if there are 2+ elements, the else statement handles it
        T.push(s[first])
        len--
      }else{
        //if reverse is false, push first element, then last element. if reverse is true, vice versa
        if(reverse){
          T.push(s[last], s[first])
        }else{
          T.push(s[first], s[last])
        }
        len -= 2
      }
      first++
      last--
      reverse = !reverse
    }
   
    return T
  }
  