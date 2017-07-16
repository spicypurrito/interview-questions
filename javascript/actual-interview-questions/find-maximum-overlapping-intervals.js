/*
From Glassdoor facebook interviews:
Assume you are given a series of lines. each with a start point and an end point.
Please find the maximal overlap between lines.
Take into account the situation where one line ends and another begins
Please code it!
Try to do it efficiently space wise and runtime wise.
What are the O space and time complexities

i.e.
lines [[8,13], [7,8], [5,9]]
overlap: [8,8] // start - end

Algorithm:
// for each list, get length of start to end (i.e. 5-9; length =4)
// for each, insert into min heap which stores by length of the list
// if you have the same length = then it still follows min heap properties (parent is smaller than or equal to node)
*/

/****** MIN HEAP IMPLEMENTATION WITH SUPPORT FOR NODES *******/
var MinHeap = function() {
  this.store = [null];
}

// Assumption is that end >= start
var ListNode = function (start, end) {
  this.start = start;
  this.end = end;
  this.length = end - start;
}

MinHeap.prototype.getValue = function (idx) {
  var value = this.store[idx];
  if (value && value.length) {
    // this is a node
    return value.length;
  }
  return value;
}

MinHeap.prototype.pop = function() {
  // get root; swap the last one to the top; bubble down
  var curr = this.store[1];
  // swap
  var lastElem = this.store.pop();
  this.store[1] = lastElem;
  this.bubbleDown(1);
  return curr;
}

MinHeap.prototype.insert = function(node) {
  // insert at the bottom; bubble up
  // get parent
  this.store.push(node);
  // private function
  this.bubbleUp(this.store.length-1);
}

MinHeap.prototype.bubbleUp = function (currIdx) {
  var parentIdx = Math.floor(currIdx/2);
  var parent = this.getValue(parentIdx);
  var current = this.getValue(currIdx);
  if (parent > current) {
    // swap
    this.swap(parentIdx, currIdx);
    this.bubbleUp(parentIdx);
  }
}

MinHeap.prototype.bubbleDown = function(currIdx) {
  var leftIdx = currIdx*2;
  var rightIdx = currIdx*2 + 1;
  var left = this.getValue(leftIdx);
  var right = this.getValue(rightIdx);
  var current = this.getValue(currIdx);
  if (current > left) {
    // swap left
    this.swap(leftIdx, currIdx);
    this.bubbleDown(leftIdx);
  } else if (current > right) {
    this.swap(leftIdx, currIdx);
    this.bubbleDown(rightIdx);
  }
}

MinHeap.prototype.swap = function(idx1, idx2) {
  var temp = this.store[idx1];
  this.store[idx1] = this.store[idx2];
  this.store[idx2] = temp;
}

// Heap Tests
function setupTestSimple() {
  var heap = new MinHeap();
  heap.insert(4);
  heap.insert(8);
  heap.insert(4);
  heap.insert(4);

  var elem = heap.pop();
  console.log(heap.store);
}

function setupTestNodes() {
  var heap = new MinHeap();
  // lines [[8,13], [7,8], [5,9]]
  heap.insert(new ListNode(8,13));
  heap.insert(new ListNode(7,8));
  heap.insert(new ListNode(5,9));

  console.log(heap.store);
}
// End Heap Tests
/****** END MIN HEAP IMPLEMENTATION WITH SUPPORT FOR NODES *******/

function setupHeap(lists) {
  var heap = new MinHeap();
  for (var i = 0; i < lists.length; i++) {
    var node = new ListNode(lists[i][0], lists[i][1]);
    heap.insert(node);
  }
  return heap;
}

function getOverlap(lists, heap) {
  // get min arr list, then set start and end to reset new pointers for next list
  // if (currStartPointer < start && currEndPointer < start), then there is no overlap
  // if (currStartPOinter < start) then reset start
  // if currLastPointer > end then reset end
  var currStartPointer = null;
  var currEndPointer = null;
  for (var i = 0; i < lists.length; i++) {
    var node = heap.pop();

    if (currStartPointer === null && currEndPointer === null) {
      currStartPointer = node.start;
      currEndPointer = node.end;
    } else {
      // determine from list if we should update pointers
      var nodeStart = node.start;
      var nodeEnd = node.end;

      // determine if there is no overlap at all possible.
      if (currStartPointer < nodeStart && currEndPointer < nodeStart) {
        console.log('There are no overlaps possible, prev list elements all smaller than curr list.');
        return;
      } else if (currEndPointer > nodeStart && currEndPointer > nodeEnd) {
        console.log('There are no overlaps possible, prev list elements all larger than curr list.');
        return;
      }

      // determine if we should move the pointers after determining if there is no overlap at all
      if (currEndPointer > nodeEnd) {
        currEndPointer = nodeEnd;
      }
      if (currStartPointer < nodeStart) {
        currStartPointer = nodeStart;
      }
    }

  }
  if (currStartPointer && currEndPointer) {
    return [currStartPointer, currEndPointer];
  }
  return [];
}

function getMaximumOverlap(lists) {
  // example lines = [[8,13], [7,8], [5,9]]
  // overlap : [[8,8]]
  var heap = setupHeap(lists);
  return getOverlap(lists, heap);
}

var lines = [[8,13], [7,8], [5,9]];
var overlap = getMaximumOverlap(lines);
console.log(overlap);
