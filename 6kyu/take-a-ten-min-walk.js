

//My Solution

function isValidWalk(walk) {
    let vertical = 0, horizontal = 0
    let vertDirection = {n: 1, s: -1}
    let horizDirection = {e: 1, w: -1}
    walk.map(function(val){
      if(val == 'n' || val == 's'){
        vertical += vertDirection[val]
      }
    })
    walk.map(function(val){
      if(val == 'e' || val == 'w'){
        horizontal += horizDirection[val]
      }
    })
    return !vertical && !horizontal && walk.length == 10
  }