// DESCRIPTION:
// JavaScript's indexOf does not work with arrays as input. This is because [1,2] === [1,2] will return false in JavaScript. Many other languages have similar quirks.

// However, sometimes it is useful to search for an Array. Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element. If there is no match, your function should return -1.

// See some examples:

// var arrayToSearch = [[1,2],[3,4],[5,6]];
// var query = [1,2]; // => 0
// query = [5,6]; // => 2
// query = [9,2]; // => -1
// You will be required to validate the inputs on the following criteria:

// each element of the array to be searched should be an array;
// each sub-array in the two-dimensional array should be of length two; and
// query should be an array of length two.
// If the inputs are not valid you should throw an Error.

// See some examples:

// var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
// arrayToSearch = [1,2,3,4,5,6]; // => throw Error
// arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
// var query = [1,2]; // => valid input
// query = 5; // => throw Error
// query = [9,2,1]; // => throw Error

//My Vomit Solution

var searchArray = function (arrayToSearch, query) { 
    //return index of matching query
    if(!Array.isArray(query)){
      throw new Error('query is not an array')
      return -1
    }
    if(query.length != 2){
      throw new Error('query length is not 2')
      return -1
    }
    if(typeof arrayToSearch[0][0] == "undefined" && arrayToSearch[0][0].constructor != Array) {
      throw new Error('arrayToSearch is not 2 dimensional') 
      return -1;
    }
    arrayToSearch.forEach(function(subArr){
        if(subArr.length != 2){
       throw new Error('sub array length is not 2')
      return -1
       }
    })
    
      let count = 0
      let index = -1
      let val1, val2;
    arrayToSearch.forEach(function(nestArr, ind, arr){
      console.log(`${nestArr} and ${ind}`)
      for(let i=0; i<query.length; i++){
        if(query[i] == nestArr[i]){
          if(query[i+1] == nestArr[i+1] && query[i+1] && nestArr[i+1]){
            if(val1 != query[i] && val2 != query[i+1]){
              count++
              index = ind
              val1 = query[i]
              val2 = query[i+1]
            }
            
          } 
        }
      }
    })
    return index
  }