/* Given an arr of stamp prices and a total amount, determine the minimum # of stamps it will take to make up that amount. For instance:
stamps = [10, 7, 1]
amount = 14
output = 2, since 7+7 = 14
but there are total:
- 7,7
- 14 1's
- 10 + 4(1's)
- 7 + 7(1's)
*/

function getMinStamps(total, stamps, cache) {
  if (total === 0) {
    return 0;
  }
  var minStamps = null;
  for(var i = 0; i < stamps.length; i++) {
    var remaining = total - stamps[i];
    var numStamps = 0;
    if (remaining >= 0) {
      if (!cache[remaining]) {
        numStamps = 1 + getMinStamps(remaining, stamps, cache);
        cache[remaining] = numStamps;
      } else {
        numStamps = cache[remaining];
      }
      if (minStamps === null) {
          minStamps = numStamps;
      }
      if (numStamps < minStamps) {
        minStamps = numStamps;
      }
    }
  }
  return minStamps;
}

console.log(getMinStamps(14, [10, 7, 1], {}));
