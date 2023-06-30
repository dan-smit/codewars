// Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

// var array = [
//   ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
//   ["name2", 110, ["B", "A", "A", "A"]],
//   ["name3", 200, ["B", "A", "A", "C"]],
//   ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
// ];
// The scores for each grade is:

// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.

// var array = [
//   ["name1", 445, ["B", "A", "A", "C", "A", "A"]],     // name1 total point is over 200 => hacked
//   ["name2", 110, ["B", "A", "A", "A"]],               // name2 point is right
//   ["name3", 200, ["B", "A", "A", "C"]],               // name3 point is 200 but real point is 90 => hacked
//   ,
//   ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
// ];

// return ["name1", "name3"];

//My Solution

// arr is a an array of objects. the objects themselves are arrays
// return name of hacked students in an array

// arr is a an array of objects. the objects themselves are arrays
// return name of hacked students in an array

function findHack(arr) {
    //Create a minimum score map object to reference
    let gradeScale = {'A': 30, 'B': 20, 'C': 10, 'D': 5}
    //Iterate through arr objects
    let newArr = arr.filter(function(student){
        //Use destructuring to get the name, score, and grades of each student
      const [name, score, grades] = student
      //Calculate the sum of the grades of each student => reduce method
      let sumOfGrades = grades.reduce((acc,cv) => acc + (gradeScale[cv] || 0), 0)
      //calculate the bonus of each student (0 if none)
      let bonus = grades.length > 4 && !grades.filter(letter => letter != 'A' && letter != 'B').length ? 20 : 0
      //return students who score above 200 or whose score != sumOfGrades + bonus
      return score > 200 || score != sumOfGrades + bonus    
      //filter down newArr to the names only rather than the whole object
    }).map(student => student[0])
    return newArr
    }