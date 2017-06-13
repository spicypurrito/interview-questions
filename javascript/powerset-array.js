// input ["A", "B", "C"]
// output ["{A}", "{A,B}", "{A,C}", "{B}", "{B,C}", "{C}", "{A,B,C}", "{}"]
// 2^3 = 8 elements in the power set including an empty one
function powerSet(arr) {
  var result = [];
  // First set it up so that you have an empty array in your larger array
  result.push([]);
  for (var i = 0; i < arr.length; i++) {
    // save the result length so you don't use the length dynamically updated from adding items in the result
    var resultLen = result.length;
    for (var j = 0; j < resultLen; j++) {
      // for each set in result, add what is in the original set
      var addSet = copy(result[j]);
      addSet.push(arr[i]);
      result.push(addSet);
    }
  }
  // print comprehensive power set
  console.log(result);
}

function copy(arr) {
  var copy = [];
  for (var i = 0; i < arr.length; i++) {
    copy.push(arr[i]);
  }
  return copy;
}

powerSet(["A", "B", "C"]);
powerSet(["A", "B", "C", "D"]);

/******** DO NOT USE ********/
// Implementation that I don't understand very much and can't explain properly
function combination (arr) {
  var i,j, temp;
  var result = [];
  var arrLength = arr.length;
  var power = Math.pow;
  let combinations = power(2,arrLength);

  for (var i = 0; i < combinations; i++) {
    temp = '';
    for (var j = 0; j < arrLength; j++) {
      // (power(2,j)) is a number with jth bit
      // so when we 'and' them with the
      // subset number we get which numbers
      // are present in the subset and which
      // are not
      if (i & power(2,j)) {
        temp += arr[j];
      }
    }

    result.push(temp);
  }
  return result;
}

console.log(combination([2,3,4]));
