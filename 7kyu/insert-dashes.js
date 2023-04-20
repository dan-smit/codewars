// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

//My Solution

function insertDash(num) {
    numArr = String(num).split('')
    let retStr = numArr.map(function(val,ind,arr){
      if((val%2!=0) && (arr[ind+1]) && (arr[ind+1]%2!=0)){
        return val+'-'
      }else{
        return val
      }
    }).join('')
   return retStr
 }