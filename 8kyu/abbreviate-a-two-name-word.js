// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//My solution

function abbrevName(name){
    arrName = name.split(' ')
    let abb = ''
    for(let i=0; i<arrName.length; i++){
      if(arrName[i] == arrName[0]){
        abb+= arrName[i][0] + '.'
      }else{
        abb+= arrName[i][0]
      }
    }
    
    return abb.toUpperCase()
  }