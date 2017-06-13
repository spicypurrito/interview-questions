// Run recursive BFS on binary search tree

// implement binary search on findValue, which should run in O(nlogn) time
// [5,7,10,15]
function findValue(arr, k) {
  return binarySearch(arr, 0, arr.length, k);
}

function binarySearch(arr, startIdx, endIdx, k) {
  var midIdx = Math.floor((startIdx + endIdx) / 2);
  var midElem = arr[midIdx];

  if (startIdx > endIdx || endIdx < startIdx) return false;

  if (k === midElem) {
    return true;
  }

  if (k < midElem) {
    return binarySearch(arr, startIdx, midIdx-1, k);
  }

  if (k > midElem) {
    return binarySearch(arr, midIdx + 1, endIdx, k);
  }

  return false;
}

console.log(findValue([5,7,10,15], 5));
console.log(findValue([5,7,10,15], 10));
console.log(findValue([5,7,10,15], 25));
