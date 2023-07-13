// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

//My Solution

function catMouse(x){
    let xArr = x.split('')
    let cIndex = xArr.indexOf('C')
    let mIndex = xArr.indexOf('m')
    if(mIndex>cIndex && mIndex-4 > cIndex){
      return 'Escaped!'
    }else{
      return 'Caught!'
    }
    }

    /* Additional solution

    function catMouse(s){
   return Math.abs(s.indexOf('C') - s.indexOf('m'))>4? 'Escaped!':'Caught!'; 
}

    */