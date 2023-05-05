// DESCRIPTION:
// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

//My Solution

function moveTen(s){
    let alp = 'abcdefghijklmnopqrstuvwxyz'
    return s.split('').map(function(val,ind){
      if(alp.indexOf(val) <= 15){
        return alp[alp.indexOf(val)+10]
      }else{
        return alp[10-(26-alp.indexOf(val))]
      } 
    }).join('')
    }