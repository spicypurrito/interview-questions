/* Algorithm:
The number of elements that we want to rotate left is given by d. So,
we know that we can start at a certain point in the array given d and the array length. But how do we find that?
The array's length tells us how far we want to rotate against.  d tells us how many
elements we want to rotate. So, if we take the array length - 1 to get the max index
and subtract d from it, this is the number of elements from the end of the array
where we want to start. Thus:
numElementsFromEnd = length - 1 - d
startIdx = length - numElementsFromEnd;
https://www.hackerrank.com/challenges/ctci-array-left-rotation
*/
function leftRotate(arr, d) {
  var length = arr.length;
  if (!length) return;
  var firstIdx = length - 1 - (length - 1 - d);
  var result = [];
  for (var i = firstIdx; i < arr.length; i++) {
    result.push(arr[i]);
  }
  for (var i = 0; i < firstIdx; i++) {
    result.push(arr[i]);
  }
  return result;
}

console.log(leftRotate([1,2,3,4,5], 4));
console.log(leftRotate([1,2,3,4,5], 2));
