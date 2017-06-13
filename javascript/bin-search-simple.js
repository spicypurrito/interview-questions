// Binary search
function binarySearch(arr, k) {
  return binSearch(arr, 0, arr.length, k);
}

function binSearch(arr, startIdx, endIdx, k) {
  var mid = Math.floor((startIdx+endIdx)/2);
  if (k === arr[mid]) {
    return true;
  }
  if (k < arr[mid]) {
    return binSearch(arr, startIdx, mid-1);
  }
  if (k > arr[mid]) {
    return binSearch(arr, mid+1, endIdx);
  }
  return false;
}

console.log('binarySearch');
console.log(binarySearch([1,2,5,7], 5));
console.log(binarySearch([1,2,5,7], 4));
