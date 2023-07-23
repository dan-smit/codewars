// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

//My Solution

function dominator(arr) {
    let domMin = arr.length/2
    let objMap = {}
    arr.forEach(function(num){
      if(objMap[num]){
        objMap[num]++
      }else{
        objMap[num] = 1
      }
    })
   let max = Math.max(...Object.values(objMap))
   let arrMap = Object.entries(objMap)
   return max > domMin ? Number(arrMap.sort((a,b) => b[1]-a[1])[0][0]) : -1
 }

 /* Another Solution
function dominator(array) {
  const counts = {};
  return array.find(value => (counts[value] = (counts[value] + 1 || 1)) > array.length / 2) || -1;
}
 
 */