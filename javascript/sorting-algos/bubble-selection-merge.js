// Sorting algorithms implementations

// Bubble sort runtime: O(n^2) ; storage: O(1)
function bubbleSort(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
      if (arr[j] > arr[j+1]) {
         var temp = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log('bubble sort');
console.log(bubbleSort([4,3,2]));
console.log(bubbleSort([10,5,1,3,8]));

// Selection sort
// Look at the whole array.  Get the smallest element. Switch it with
// the first elem in array. Continue to do this with the 2nd smallest elem, etc.
// Runtime: O(n^2); Space: O(1)
function selectionSort(arr) {
  var length = arr.length;
  // set smallest element to first element in array
  for (var i = 0; i < length; i++) {
    var smallestElem = arr[i];
    var smallestIdx = i;
    for (var j = i; j < length; j++) {
      if (smallestElem > arr[j]) {
        smallestIdx = j;
        smallestElem = arr[j];
      }
    }
    // swap
    arr[smallestIdx] = arr[i];
    arr[i] = smallestElem;
  }
  return arr;
}

console.log('selection sort');
console.log(selectionSort([4,3,2]));
console.log(selectionSort([10,5,1,3,8]));

// Merge sort
// Split array into two.  Eventually you end up with two elems in an array and swap. The merge portion of the array is what takes up most of the storage.
// Run time: O(nlog(n)) to go through array once and then half the array each time.  Space: Depends on how sorted the array is, since you end up making a copy of the array in some cases when merging.
function mergeSort(arr) {
  var length = arr.length;
  if (length <= 1) {
    return arr;
  }
  var mid = Math.floor(length/2);
  //console.log(mid);
  var firstArr = arr.splice(0, mid);
  var secondArr = arr;
  //console.log(firstArr);
  //console.log(secondArr);
  var left = mergeSort(firstArr);
  var right = mergeSort(secondArr);
  return merge(left, right);
}

function merge(left, right) {
  var result = [];
  while(left.length && right.length) {
    if (left[0] < right[0]) {
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

console.log('merge sort');
console.log(mergeSort([3,2,1]));
console.log(mergeSort([10,5,1,3,8]));

// Quick sort
//
