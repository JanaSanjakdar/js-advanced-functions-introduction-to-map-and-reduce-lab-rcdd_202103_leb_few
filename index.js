// Your code here
let sourceArray = [];

function mapToNegativize(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(-1 * sourceArray[i])
      }
      return newArray
}

function mapToNoChange(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(sourceArray[i])
      }
      return newArray
}

function mapToDouble(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(2 * sourceArray[i])
      }
      return newArray
}

function mapToSquare(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(sourceArray[i] * sourceArray[i])
      }
      return newArrays
}

function reduceToTotal(sourceArray, startingPoint=0) {
let total = startingPoint;
   for (let i = 0; i < sourceArray.length; i++){
     total += sourceArray[i];
   }
   return total;
 }


/*function reduceToAllTrue(sourceArray){

    const reducer = function(accumulator, currentValue){
        if(!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray){
    const reducer = function(accumulator, currentValue){
        if(accumulator == true){
            return true
        } else {
            return !!currentValue
        }
    }
    return sourceArray.reduce(reducer, false)
}*/
