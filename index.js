// Your code here
let sourceArray = [];

function mapToNegativize(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(-1 * sourceArray[i])
      }
      return newArray
};
function mapToNoChange(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(sourceArray[i])
      }
      return newArray

};
function mapToDouble(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(2 * sourceArray[i])
      }
      return newArray

};
function mapToSquare(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(sourceArray[i] * sourceArray[i])
      }
      return newArray

};
