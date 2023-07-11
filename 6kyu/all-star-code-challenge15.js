// This Kata is intended as a small challenge for my students

// Your family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.

// The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.

// Your father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings.

// Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

// rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
// Note: The original string should be included in the output array. The order matters. Each element of the output array should be the rotated version of the previous element. The output array SHOULD be the same length as the input string. The function should return an empty array with a 0 length string, '', as input.

//My Solution

function rotate(str){
    //declare a new string. same as str initially but becomes mutated
      let retStr = str
      let retArr = []
      //loop through str, call a function to rotate letters properly, push them into array
      for(let i=0 ; i<str.length; i++){
        retStr = rotation(retStr)
        retArr.push(retStr)
      }
      //return array
      return retArr;
    
    }
    
//rotates string from the rotate function
function rotation(str){
  let retStr = str
  let val = str[0]
  return str.slice(1) + val
}

/*
Additional solution from codewars I thought was neat

function rotate(str){
    return str.split('').map(e => str = str.slice(1) + str.slice(0, 1))
}


*/