// Twitch interview 2.0
// Given an array of stock prices, determine the max profit for when is best to buy and sell. Note that if you buy at arr[i], then you can only sell at arr[i+x].

function maxProfit(stocks) {
  var max = 0;
  var minStock = stocks[0];
  for (var i = 0 ; i < stocks.length; i++) {
    if (stocks[i] < minStock) {
      minStock = stocks[i];
    }
    var profit = stocks[i] - minStock;
    if (profit > max) {
      max = profit;
    }
  }
  console.log(max);
}

maxProfit([20,40,35,60,30,80,90,37]);

// Given a number of columns and an input, determine which column the input should go in. For instance, if there are 3 columns:
// pickColumn(100) -> 0
// pickColumn (50) -> 1
// pickColumn (75) -> 2
// pickColumn(30) -> 1 // now column 1 has 80 pixels
// General algo:
// Set up the columns. Determine which is min column. Add the pixels there.

var Page = function(cols) {
  this.numCols = cols;
  this.cols = [];
  for (var i = 0; i < cols; i++) {
    this.cols[i] = 0;
  }
}

Page.prototype.pickColumn = function(pixels) {
  var minPixels = this.cols[0];
  var minIdx = this.cols[0];
  // O(n) algorithm - linear
  for (var i = 0; i < this.numCols; i++) {
    if (this.cols[i] === 0) {
      this.cols[i] = pixels;
      return i;
    }
    if (this.cols[i] < minPixels) {
      minPixels = this.cols[i];
      minIdx = i;
    }
  }

  this.cols[minIdx] = pixels + minPixels;
  return minIdx;
}

var page = new Page(3);
console.log(page.cols);

page.pickColumn(100);
page.pickColumn(50);
page.pickColumn(75);
console.log(page.cols);
console.log(page.pickColumn(30));
console.log(page.pickColumn(45));
console.log(page.cols);

/* Analysis: we can make this algorithm faster by using a minheap.
By constructing a min heap to contain a node that represents each column.
The minimum column would be the root with an index within the node, and each time we call "pickColumn",
it would take the root and add the pixels to it.
Once we add the pixels to it, it might not be the min -
so we have to modify the heap to set it back to a proper order
(reorder heap or something). This would be a run time insertion of O(log(n)) instead of O(n)!*/
