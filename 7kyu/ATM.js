// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

// Good Luck!!!

//My Solution

function solve(n) {
    if(n<1 || n > 1500) return -1
    let count = 0
    let done = false
    let amount = n
    while(!done){
      if(amount >= 500){
        amount -= 500
        count++
      }else if(amount >= 200){
        amount -= 200
        count++
      }else if(amount >= 100){
        amount -= 100
        count++
      }else if(amount >= 50){
        amount -= 50
        count++
      }else if(amount >= 20){
        amount -= 20
        count++
      }else if(amount >= 10){
        amount -= 10
        count++
      }else{
        done = true
        if(amount != 0) return -1
      }
    }
    return count
    
  }

  /*    Different Solution
function solve(n) {
  if(n % 10 !== 0) return -1;
  let count = 0;
  while(n >= 500) { n -= 500; count += 1}
  while(n >= 200) { n -= 200; count += 1}
  while(n >= 100) { n -= 100; count += 1}
  while(n >= 50) { n -= 50; count += 1}
  while(n >= 20) { n -= 20; count += 1}
  while(n >= 10) { n -= 10; count += 1}
  return count;
}

 */