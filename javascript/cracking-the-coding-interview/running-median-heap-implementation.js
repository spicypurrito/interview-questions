/*
Running median heap implementation.
Get the median of a stream of integers.
Median definition:
- Sort integers seen and get the middle of it. If even, it's the average of the two mid elements.
- Set lower half in a max heap; set upper half in a min heap.
Algo:
- Insert
- Rebalance (making sure largest diff between both heaps is 1)
- Get median
*/

var Heap = function(isMinHeap) {
  this.store = [null];
  this.isMinHeap = isMinHeap;
}

Heap.prototype.comparator = function (value, key) {
  // if min heap, then check the key is smaller than the current value in heap
  return this.isMinHeap ? key > value : key < value;
}

Heap.prototype.getLength = function () {
  return this.store.length - 1;
}

Heap.prototype.peek = function() {
  return this.store[1];
}

Heap.prototype.insert = function(key) {
  this.store.push(key);
  if (this.store.length > 2) {
    this._bubbleUp(this.store.length-1, key);
  }
}

Heap.prototype._bubbleUp = function(idx, key) {
  // determine if we need to swap

  if (idx === 1) return;

  var parentIdx = Math.floor(idx/2);
  var parent = this.store[parentIdx];
  if (!this.comparator(parent, key)) {
    this.store[parentIdx] = key;
    this.store[idx] = parent;
    this._bubbleUp(parentIdx, key);
  }
  return;
}

Heap.prototype.extract = function() {
  var min = this.peek();
  var length = this.store.length;
  // swap
  this.store[1] = this.store[length-1];
  this.store.pop();

  this._bubbleDown(1);
  return min;
}

Heap.prototype._bubbleDown = function(idx) {
  // determine if we need to swap

  var leftIdx = 2*idx;
  var rightIdx = 2*idx + 1;
  var left = this.store[leftIdx];
  var right = this.store[rightIdx];

  var current = this.store[idx];

  if (!left || !right) return;

  if (!this.comparator(left, current)) {
    this.store[leftIdx] = current;
    this.store[idx] = left;
    this._bubbleDown(leftIdx);
  } else if (!this.comparator(right, current)) {
    this.store[rightIdx] = current;
    this.store[idx] = right;
    this._bubbleDown(rightIdx);
  }

  return;
}

function setupTest() {
  var minHeap = new Heap(true);
  var maxHeap = new Heap(false);
  minHeap.insert(5);
  minHeap.insert(2);
  minHeap.insert(1);

  maxHeap.insert(3);
  maxHeap.insert(7);
  maxHeap.insert(2);
  console.log(minHeap);
  console.log(maxHeap);

  console.log(minHeap.peek());
  console.log(maxHeap.peek());

  console.log(maxHeap.extract());
  console.log(maxHeap);
}

//setupTest();

/******** MEDIAN ALGO *********/
var lower = new Heap(false); // max heap for lower half
var higher = new Heap(true); // min heap for upper half

function getMedianFromStream(x) {
  console.log('Get Median From Stream...');
  // setup min and max heaps
  // insert into min or max with key
  // rebalance
  // get median
  // assume there are no duplicates

  insert(lower, higher, x);
  rebalance(lower, higher);
  return getMedian(lower, higher);
}

function insert(lower, higher, key) {
  if (lower.getLength() === 0 || lower.peek() > key) {
    lower.insert(key);
  } else {
    higher.insert(key);
  }
}

function rebalance(lower, higher) {
  var lowerLength = lower.getLength();
  var higherLength = higher.getLength();
  if (Math.abs(lowerLength - higherLength) > 1) {
    if (lowerLength > higherLength) {
      var extracted = lower.extract();
      higher.insert(extracted);
    } else {
      var extracted = higher.extract();
      lower.insert(extracted);
    }
  }
}

function getMedian(lower, higher) {
  var lowerLength = lower.getLength();
  var higherLength = higher.getLength();
  if (lowerLength === higherLength) {
    return (lower.peek() + higher.peek()) / 2;
  }
  return lowerLength > higherLength ? lower.peek() : higher.peek();
}

console.log(getMedianFromStream(4));
console.log(getMedianFromStream(2));
console.log(getMedianFromStream(1));
console.log(getMedianFromStream(3));
console.log(getMedianFromStream(5));
