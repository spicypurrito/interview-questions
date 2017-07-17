/*
 Given a list of stock prices for a particular stock on each day, print out a strategy for buying / selling the stock to make max profile. What is the max profile and which days will you buy and sell ?
*/

// e.g. list = [2, 3, 1, 7, 4, 5, 9, 4]
// expected output = buy at 1, sell at 9 = max profit $8

// you can actually type here while you're giving examples


/*
  // O(n^2)
  // 2
  // calculate profit for i+1..
  // 9-2 => $7

  // O(n)
  // minValue = 1
  // minIdx = 2
  // maxProfit => Math.max(arr[currIdx] - minValue, maxProfit)
  // calc at 9 ; profit = $8
  // return indices and profit
  // considerations : when to set min value and when to set max profit
  // buy idx <= curridx to yield max profit
*/

function getMaxStock(arr) {
  // initialize all your variables
  var buyIdx = null;
  var sellIdx = null;
  var maxProfit = null;

  // Use case: need to buy and sell on the same day
  for (var i = 0; i < arr.length; i++) {
    if (buyIdx === null) {
      buyIdx = i;
    }
    // reset minimum
    if (arr[i] < arr[buyIdx]) {
      buyIdx = i;
    }

    // calculate the minimum and set up max profit/sellIdx
    var calculatedProfit = arr[i] - arr[buyIdx];
    if (maxProfit === null) {
      maxProfit = calculatedProfit;
      sellIdx = i;
    } else if (calculatedProfit > maxProfit) {
      maxProfit = calculatedProfit;
      sellIdx = i;
    }

  }

  console.log('Max profit' + maxProfit);
  console.log('buyIdx: ' + buyIdx);
  console.log('sellIdx: ' + sellIdx);
  // Should ask interviewing about returns and cases for return
}

iteration; buyIdx; sellIdx; maxProfit
0 ; 0; -- ; --
1 ; 0; 1; 1

function setupTest() {
  var arr = [2, 3, 1, 7, 4, 5, 9, 4];
  getMaxStock(arr);
}

// Notes:
/*
- Don't run test case with large number of arrays and type a small amount with
something that works
- Nicer if you can catch bugs without running test case; better think about it first
- Define input and output for diff cases
- Talk about test cases first

*** BEFORE JUMPING INTO CODE ***
- Define input/output
- Define assumptions
- Define constraints
- Get into diff algorithms and consequences (i.e. brute force; improved)
- Once you've written code and *walked over* to make sure there are no obvious bugs
- Go over test cases; don't test before walking over

If you can't think of algo, then ask interviewer if you can demonstrate some coding abilities with some approach
*/
