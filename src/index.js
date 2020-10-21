
// You should implement your task here.
module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let newMatrix = [];
  function isEven(item, i) {
     if (i % 2 !== 0) {
        item = item.reverse();
        newMatrix.push(item);
        console.log('is even ', item)
     } else {
        console.log('is odd ', item)
        newMatrix.push(item);
     }
  }
  matrix.forEach(isEven)
   newMatrix = [].concat.apply([], newMatrix);
  return newMatrix;
}

