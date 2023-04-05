// DESCRIPTION:
// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.
// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.
// An example should clarify:
// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

//My Solution 

function insideOut(x){
    let xArr = x.split(' ')
    return xArr.map(function(word){
      if(word.length %2 == 0){
    return word.slice(0,word.length/2).split('').reverse().join('')+word.slice(word.length/2).split('').reverse().join('')
  }else{
    return word.slice(0,Math.floor(word.length/2)).split('').reverse().join('')+word[Math.floor(word.length/2)] + word.slice(Math.ceil(word.length/2)).split('').reverse().join('')
    }
      }).join(' ') 
  }