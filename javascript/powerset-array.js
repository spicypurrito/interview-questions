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
