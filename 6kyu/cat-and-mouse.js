// ks (3)
// Discourse (48)
// Translations
// Collect|
// You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump (j) characters.

// Also, the cat cannot jump over the dog.

// So:

// if j = 5:

// ..C.....m. returns 'Caught!' <-- not more than j characters between

// .....C............m...... returns 'Escaped!' <-- as there are more than j characters between the two, the cat can't jump far enough

// if j = 10:

// ...m.........C...D returns 'Caught!' <--Cat can jump far enough and jump is not over dog

// ...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

// Finally, if all three animals are not present, return 'boring without all three'

//My Solution

function catMouse(x, j){
    //instantiate an index object containing the indexes of each character
      var index = {};
    for(let l=0; l<x.length; l++){
      index[x[l]] = l
    }
    //Connect the indexes of C,D, and m to their respective index
    let {C,D,m} = index
    //Check to see if C,D, and m are not present
    if(Number.isNaN(C+D+m)) return 'boring without all three'
    if(Math.abs(m-C) <= j){
      if((D>C && D<m) || (D>m && D<C)) return 'Protected!'
      return 'Caught!'
    }
    return 'Escaped!'
  }