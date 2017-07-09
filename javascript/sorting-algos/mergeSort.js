// merging two arrays together generally take extra space
// o(nlogn) run time
// o(n) space
function mergeSort(arr) {
  if (arr.length < 2)
    return arr;
  var midIdx = Math.floor((arr.length)/2);
  var left = arr.slice(0, midIdx);
  var right = arr.slice(midIdx, arr.length);
  var result = [];
  var sortedArr = merge(mergeSort(left), mergeSort(right), result);
  return sortedArr;
}

function merge (left, right, result) {
  // merge until we get to the end of either array
  while (left.length && right.length) {
    // since you're popping from the left and right, you don't need to keep track of idx
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
      result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

console.log(mergeSort([1,2,3]));
console.log(mergeSort([3,1,2,5,10,8]));

mergeSort(arr) {
  // get mid
  // slice left array vs right array
  // left = arr.slice(0, midIdx);
  // right = arr.slice(midIdx, arr.length)
  // set result = []
  // sortedArr = merge (mergesort(leftArr), mergesort(rightArr), result);
  return sortedArr
}

merge(leftArr, rightArr, result) {
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
       result.push(leftArr.shift());
    } else if (rightArr[0] < leftArr[0]) {
      result.push(rightArr.shift());
    }
  }

  while (leftArr.length) {
    result.push(leftArr.shift());
  }
  while (rightArr.length) {
    result.push(rightArr.shift());
  }
  return result;
}
