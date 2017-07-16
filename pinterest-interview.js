var _ = require('underscore');
// def format_names(names)
// input: ['Alice', 'Bob', 'Christina']
// output: "Alice, Bob and Christina"

// def formatNamesLimit(names, limit)
// input: ['Alice', 'Bob', 'Christina', 'Dave'], 2
// output: "Alice, Bob and 2 more"

// 0 limit; default to what first function did
// 1 limit; same behavior as other limits

// same loop
// we'll stop at limit-1 as the idx to print the last name
// names.length - limit

function formatNamesWithLimit(names, limit) {
  var length = names.length;
  var stopIdx = limit-1;
  var remainingNames = length - limit;
  var returnStr = '';

  if (limit === 0 || limit >= length) {
    return formatNames(names);
  }

  if (names.length === 1) {
    return names[0];
  }

  for (var i = 0; i < stopIdx; i++) {
    returnStr += names[i] + ', ';
  }

  returnStr += names[stopIdx] + ' and ' + remainingNames + ' more';
  return returnStr;
}

function formatNames(names) {
  // loop through each arr idx
  // set up a string to return ''
  // if idx is not at end of arr, append names[i] + ', '
  // if idx is at end, append ' and ' names[i]

  var length = names.length;
  var returnStr = '';
  var lastIdx = length-1;
  var secondToLastIdx = length-2;

  if (names.length === 1) {
    return names[0];
  }

  for (var i = 0; i < length; i++) {
     if (i === lastIdx) {
       returnStr += names[i];
     } else if (i === secondToLastIdx) {
       returnStr += names[i] + ' and ';
     }
     else {
       returnStr += names[i] + ' , ';
     }
  }

  return returnStr;
}

function setupTest() {
  var arr = ['Alice', 'Bob', 'Christina'];
  console.log(formatNames(arr));

  var arr2 = ['Alice'];
  var arr3 = ['Alice', 'Bob'];
  console.log(formatNames(arr2));
  console.log(formatNames(arr3));

  var arr4 = [];
  console.log(formatNames(arr4));
}

function setupTest2() {
  var arr = ['Alice', 'Bob', 'Christina', 'Dave'];
  console.log(formatNamesWithLimit(arr, 2));
  // empty arr
  var arr1 = [];
  console.log(formatNamesWithLimit(arr1, 0));

  // arr with 0 limit
  var arr2 = ['Alice', 'Bob', 'Christina', 'Dave'];
  console.log(formatNamesWithLimit(arr2, 0));

  var arr2 = ['Alice', 'Bob'];
  console.log(formatNamesWithLimit(arr2, 1));

  var arr2 = ['Alice', 'Bob'];
  console.log(formatNamesWithLimit(arr2, 2));

  var arr2 = ['Alice', 'Bob'];
  console.log(formatNamesWithLimit(arr2, 5));
}

setupTest2();
