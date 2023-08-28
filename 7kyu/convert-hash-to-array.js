// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

// Good Luck!

// My Solution

function convertHashToArray(hash){
    let objKeys = Object.keys(hash)
    let objVals = Object.values(hash)
    let retMap = []
    for(let i=0; i<objKeys.length; i++){
      retMap[i] = [objKeys[i], objVals[i]]
    }
    return retMap.sort((a, b) => a[0] > b[0])
  }

  /*    Better Solutions

  const convertHashToArray = o => Object.entries(o).sort();

  OR
  
  function convertHashToArray(hash){
    let result = [];
    Object.keys(hash).sort().map(item => result.push([item,hash[item]]));
  return result;
}

  */