/* Merge two arrays that are increasing and get the median */
// Implementation: O(n+m)

// assumption: both arrays are in increasing order
function merge(arr1, arr2) {
  var tempArr1 = arr1;
  var tempArr2 = arr2;
  var result = [];

  while (tempArr1.length && tempArr2.length) {
    if (tempArr1[0] < tempArr2[0]) {
      result.push(tempArr1.shift());
    } else if (tempArr2[0] < tempArr1[0]) {
      result.push(tempArr2.shift());
    }
  }

  while (tempArr1.length) {
    result.push(tempArr1.shift());
  }

  while(tempArr2.length) {
    result.push(tempArr2.shift());
  }

  return result;
}

function getMedian(arr) {
  var midIdx = Math.floor((arr.length - 1) / 2);
  if (arr.length % 2 === 0) {
    return (arr[midIdx] + arr[midIdx+1]) / 2;
  }
  return arr[midIdx];
}

function getTwoArraysMedian(arr1, arr2) {
   var merged = merge(arr1, arr2);
  return getMedian(merged);
}

var arr1 = [5];
var arr2 = [2,3];
console.log(getTwoArraysMedian(arr1, arr2));

var arr1 = [1,4,7];
var arr2 = [5,9];
console.log(getTwoArraysMedian(arr1, arr2));

var arr1 = [1,2];
var arr2 = [3,4];
console.log(getTwoArraysMedian(arr1, arr2));
