// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
  //returns 3

//My Solution

function strCount(obj){
    let count = 0
    for(let property in obj){
      if(typeof obj[property] == 'string'){ count++
      }else if(typeof obj[property] == 'object') count += strCount(obj[property])
      }
      return count
    }