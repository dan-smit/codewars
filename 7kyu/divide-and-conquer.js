// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

//My Solution 
function divCon(x){
    let total = 0
    x.forEach(function(item){
      if(typeof item == 'number'){
        total = total + item
      }else{
        total = total - +item
      }
    })
    return total
  }