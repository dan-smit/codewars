// Let's implement the zipObject function that enables such results

// zipObject(['fred', 'barney'], [30, 40])
// => { 'fred': 30, 'barney': 40 }

// zipObject([['fred', 30], ['barney', 40]])
// => { 'fred': 30, 'barney': 40 }
// The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

// If only keys are given, then set the values to undefined.

// zipObject(['fred', 'barney'])
// { fred: undefined, barney: undefined }
// If neither keys nor values are specified, then return {}

// zipObject()
// {}

//My Solution

function zipObject(keys, values){
    //Initialize an empty object to store key-value pairs
    let result = {};
    //iterate over keys array and check to see if it is an array
    (keys || []).forEach(function(key, index){
        //check to see if key is an array. If it is, treat it as a pair where the first element is key, second is value
        //If not an array, assume the key should directly correspond to an element in the 'values' array
        if(key instanceof Array){
            result[key[0]] = key[1]
        }else{
            result[key] = (values || [])[index]
        }
    })
    return result
}