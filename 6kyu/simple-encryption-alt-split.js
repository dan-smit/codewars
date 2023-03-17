// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

//My Solution

function encrypt(text, n) {
    if(!text || n<=0) return text
    while(n--){
        let evens = text.split('').filter((val,ind) => ind%2 ==0)
        let odds = text.split('').filter((val,ind) => ind%2 !== 0)
        text = odds.join('') + evens.join('')
    }
  return text
   }
   
   function decrypt(encryptedText, n) {
     if(!encryptedText || n<=0) return encryptedText
     let ans = new Array(encryptedText.length)
     while(n>0){
         let j=0
         for(let i=1; i<ans.length; i+=2){
           ans[i] = encryptedText[j++]
         }
         for(let i=0; i<ans.length; i+=2){
           ans[i] = encryptedText[j++]
         }
       n--
       encryptedText = ans.join('')
       }
     return encryptedText
   }