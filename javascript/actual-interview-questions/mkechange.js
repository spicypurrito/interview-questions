/*
coins = [25, 10, 5, 1]
money = 30; how many ways to make money
*/
function makeChangeWrapper(money, coins) {
  return makeChange(money, coins, 0);
}

function makeChange(money, coins, index) {
  if (money === 0) {
    return 1;
  }

  if (index >= coins.length) {
    return 0;
  }

  var amountWithCoin = 0;
  var ways = 0;

  while (amountWithCoin <= money) {
    var remaining = money - amountWithCoin;
    ways += makeChange(remaining, coins, index+1);
    amountWithCoin += coins[index];
  }

  return ways;
}

console.log(makeChangeWrapper(25, [25,10,5,1]));

console.log(makeChangeWrapper(1, [1]));

console.log(makeChangeWrapper(5, [5,1]));
