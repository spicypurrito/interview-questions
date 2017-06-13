// [5,2,3,12] sumK = 8 result = 5,3
// let's assume that the array is in ascending order. Negatives can happen as well

// Naive implementations
// O(n^2) runtime with space complexity of O(1)
function naivePairSum(arr, k) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = i+1; j < len; j++) {
      if (arr[i] + arr[j] === k) {
        console.log (arr[i] + ',' + arr[j]);
        return;
      }
    }
  }
}

naivePairSum([2,3,4,5,12], 8);
naivePairSum([2,2,4,4,12], 8);

// Hashmap implementation
// O(n) time and O(n) storage since you're putting n items in a hashmap
// k - arr[i] = what you want to find
// [5,2,4,4]; 8
function hashmapPairSum(arr, k) {
  var length = arr.length;
  var map = {};

  for (var i = 0; i < length; i++) {
    // first check if complement is in hashmap
    var complement = k - arr[i];
    if (map[complement]) {
      console.log('Found summation:' + arr[i] + ',' + complement);
      return;
    } else {
      if (!map[arr[i]]) {
        map[arr[i]] = 1;
      }
    }
  }

  console.log(arr + ': Does not have a corresponding sum');
}

hashmapPairSum([2,3,5,12], 8);
hashmapPairSum([2,3,4,4,9], 8);
hashmapPairSum([2,3,4,9], 8);

// Binary search against the arry. This gives you O(nlogn) run time.
function pairSumBinSearch(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    var complement = k - arr[i];
    if (binSearch(arr, 0, arr.length, complement, i)) {
      console.log(arr[i] + ',' + complement);
      return;
    }
  }
  console.log(arr + ':Could not find sum');
}

function binSearch(arr, startIdx, endIdx, key, currentIdx) {
  var midIdx = Math.floor((startIdx + endIdx)/2);
  var midElem = arr[midIdx];

  // Handle duplicates and overflows
  if (midIdx === currentIdx || startIdx > endIdx) return false;

  if (key === midElem) {
    return true;
  }
  if (key < midElem) {
    return binSearch(arr, startIdx, midIdx-1, key);
  }
  if (key > midElem) {
    return binSearch(arr, midIdx+1, endIdx, key);
  }
  return false;
}

console.log('pair sum bin search');
pairSumBinSearch([2,3,5,12], 8);
pairSumBinSearch([2,3,4,4,9], 8);
pairSumBinSearch([2,3,4,9], 8);
