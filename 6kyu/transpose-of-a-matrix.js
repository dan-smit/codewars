// Transpose means is to interchange rows and columns of a two-dimensional array matrix.

// [AT]ij=[A]ji

// ie: Formally, the i th row, j th column element of AT is the j th row, i th column element of A:


// Example :

// [[1,2,3],[4,5,6]].transpose() //should return [[1,4],[2,5],[3,6]]
// Write a prototype transpose to array in JS or add a .transpose method in Ruby or create a transpose function in Python so that any matrix of order ixj 2-D array returns transposed Matrix of jxi.

//My Solution

Array.prototype.transpose = function() {
    if(!this.length) return []
    if(!this[0].length) return [[]]
    
    let transposedMatrix = []
    
    for(let i=0; i<this[0].length; i++){
        let innerArr = []
        for(let j=0; j<this.length; j++){
            innerArr.push(this[j][i])
        }
        transposedMatrix.push(row)
    }
    
    return transposedMatrix

}