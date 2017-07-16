function threeSum (arr, cache) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      for (var k = 2; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          var key = arr[i] + '-' + arr[j] + '-' + arr[k];
          if (!cache[key]) {
            output.push([arr[i], arr[j], arr[k]]);
            cache[key] = true;
          }
        }
      }
    }
  }
  return output;
}

var output = threeSum([-1, 0, 1, 2, -1, 4], {});
console.log(output);
