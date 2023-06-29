

//My solution

function recycle(array){
    let paper = [], glass = [], organic = [], plastic = []
    array.forEach(obj => {
        if(obj.material === 'paper' || obj.secondMaterial === 'paper') paper.push(obj.type)
        if(obj.material === 'glass' || obj.secondMaterial === 'glass') glass.push(obj.type)
        if(obj.material === 'organic' || obj.secondMaterial === 'organic') organic.push(obj.type)
        if(obj.material === 'plastic' || obj.secondMaterial === 'plastic') plastic.push(obj.type)

    })
    return [paper, glass, organic, plastic]
}