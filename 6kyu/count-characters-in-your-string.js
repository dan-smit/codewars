// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}

//My Solution

function count(string) {
    let objMap = {}
    string.split('').forEach(function(letter){
      if(objMap[letter]){
        objMap[letter]++
      }else{
        objMap[letter] = 1
      }
    })
    return objMap
  }