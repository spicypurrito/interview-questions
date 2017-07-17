/* get total number of ways to make a total amount*/
/**** WITHOUT MEMOIZATION ******/
function makeCoins(amount, coins) {
  // set up idx so that we don't count the same ways all over again
  return makeCoinsHelper(amount, coins, 0);
}

function makeCoinsHelper(amount, coins, idx) {
  var remaining = 0;
  var numWays = 0;

  if (amount < 0) {
    return 0;
  }

  if (amount === 0) {
    return 1;
  }

  for (var i = idx; i < coins.length; i++) {
    remaining = amount - coins[i];
    numWays += makeCoinsHelper(remaining, coins, i);
  }

  return numWays;
}

var num = makeCoins(27, [25, 10, 5, 1]);
console.log(num === 13);

var num = makeCoins(10, [2,5,3,6]);
console.log(num === 5);

/***** WITH MEMOIZATION *****/
/* get total number of ways to make a total amount*/

function makeCoins(amount, coins) {
  // set up idx so that we don't count the same ways all over again
  return makeCoinsHelper(amount, coins, 0, {});
}

function makeCoinsHelper(amount, coins, idx, cache) {
  var remaining = 0;
  var totalWays = 0;

  if (amount < 0) {
    return 0;
  }

  if (amount === 0) {
    return 1;
  }

  for (var i = idx; i < coins.length; i++) {
    remaining = amount - coins[i];
    if (remaining >= 0) {
      var key = remaining.toString() + ' - ' + coins[i].toString();
      if (!cache[key]) {
        var numWaysForCoin = makeCoinsHelper(remaining, coins, i, cache);
        totalWays += numWaysForCoin;
        cache[key] = numWaysForCoin;
      } else {
        totalWays += cache[key];
      }
    }
  }

  return totalWays;
}

var num = makeCoins(27, [25, 10, 5, 1]);
console.log(num === 13);

var num = makeCoins(10, [2,5,3,6]);
console.log(num === 5);
