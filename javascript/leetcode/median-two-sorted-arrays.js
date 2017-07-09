// Find the median of two sorted arrays
// The median is definted for an array:
/*
 if the array length is odd, then it is (n - 1) / 2 index
 if the array length is even, then the median is:
 leftMid = ((n-1)/2) - .5 // since mid should be odd, then +/- .5
 rightMid = ((n-1/2)) + .5
 median = (leftMid + rightMid) / 2
*/
/* Examples
nums1 = [1, 3]
nums2 = [2]

The median is 2.0

sol:
merge the two arrays, then find the median
[1,2,3] => (n-1)/2 => 2/2 => 1 => arr[1] => 2.0

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2+3)/2 => 2.5, but .... how do we get those?

n-1/2 => 3/2 => 1.5
1.5+.5 => 2
1.5-.5 => 1

[1,2,3,4] => mid = 3/2 = 1.5 => leftMid = 1.5-.5 => arr[1] => 2; rightMid = 1.5+.5 => arr[2] => 3

ALGORITHM:
We are using an O(m*log(n)) algo which:
- uses the larger array as the array that we insert into
- uses the smaller array as the set of keys that we'll be inserting into the array, so we can eventually get the median of the merged arrays
*/

// From leetcode : https://leetcode.com/submissions/detail/108376135/

function findMedianSortedArrays(nums1, nums2) {
  // get larger array, set one to insertion and one to key
  var insertArr;
  var keyArr;
  if (nums1.length >= nums2.length) {
    insertArr = nums1;
    keyArr = nums2;
  } else {
    insertArr = nums2;
    keyArr = nums1;
  }
  var length = keyArr.length;
  for (var i = 0; i < length; i++) {
    // insert for each key
    var key = keyArr[i];
    insert(insertArr, 0, insertArr.length-1, key);
  }
  return getMedian(insertArr);
}

function insert(arr, startIdx, endIdx, key) {
  // if start idx === end idx || mid === key, then insert
  var midIdx = Math.floor((startIdx + endIdx)/2);
  var mid = arr[midIdx];
  // could occur for either arr of size 1 or larger
  if (mid === key) {
    insertHelper(arr, midIdx, key);
    return arr;
  }
  if (startIdx === endIdx || startIdx > endIdx) {
    // second base case, insert based on left or right
    if (mid > key) {
      // if bigger than the key, then we want to insert it at the place that mid is at so that it is right before the mid
      insertHelper(arr, midIdx, key);
    } else if (mid < key) {
      // otherwise, insert it right after midIdx
      insertHelper(arr, midIdx + 1, key);
    } else if (!mid) {
      // the mid is undefined and we have to insert at start or end
      insertHelper(arr, midIdx, key);
    } else {
      console.log('Another case unaccounted for.');
    }
    return arr;
  }

  // otherwise, recurse left or right
  if (mid > key) {
    return insert(arr, startIdx, midIdx-1, key);
  }  else if (mid < key) {
    return insert(arr, midIdx+1, endIdx, key);
  }
}

/* insertion into the array. If index is >= arr length, then insert at end. if index is <= 0, then insert at the beginning.*/
function insertHelper(arr, idx, key) {
  if (idx <= 0) {
    arr.unshift(key);
  } else if (idx >= arr.length) {
    arr.push(key);
  } else {
    arr.splice(idx, 0, key);
  }
  return arr;
}

/* Gets the median of an array. if odd length, get mid elem. if even length, get two mid elems and add/2 */
function getMedian(arr) {
  var length = arr.length;
  if ( length % 2 === 0) {
    var leftMedian = (length-1)/2 - .5;
    var rightMedian = (length-1)/2 + .5;
    return (arr[leftMedian] + arr[rightMedian])/2;
  }
  return arr[(length-1)/2];
}

function tests() {
  // test get median
  /*console.log('Testing get median');
  console.log(getMedian([1,2,3,4]));
  console.log(getMedian([1,2,3,4,5]));

  // test insert
  console.log('Testing insertion');
  var testOneItem = [2];
  console.log( insert(testOneItem, 0, 1, 2));
  var testMultiple = [1,2,5];
  console.log( insert(testMultiple, 0, testMultiple.length-1, 4));*/

  // Test full
  console.log('Testing findMedianSortArray');
  var arr1 = [1,3];
  var arr2 = [2];
  console.log(findMedianSortedArrays(arr1, arr2));

  var arr1 = [1, 2]
  var arr2 = [3, 4]
  console.log(findMedianSortedArrays(arr1, arr2));


  var arr1 = [];
  var arr2 = [2,3];
  console.log(findMedianSortedArrays(arr1, arr2));

  var arr1 = [1];
  var arr2 = [2,3];
  console.log(findMedianSortedArrays(arr1, arr2));

  var arr1 = [5];
  var arr2 = [2,3];
  console.log(findMedianSortedArrays(arr1, arr2));
}

tests();
