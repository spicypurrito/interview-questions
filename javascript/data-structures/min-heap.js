/* A min-heap is when you have a complete binary tree where the parent node is
* always smaller than its children nodes.
There are two main functions that a min heap can be implemented with which both result
in O(log(n)) time:
insert(node n):
- this inserts a given node into the tree while maintaining the min-heap properties.
- algorithm:
* insert the node into the next available spot in the given data structure
that will retain the heap properties:
** if level is not filled, go to right most node and insert it in left if empty; right if not
** if level is filled, insert it in the left most portion of the tree to maintain heap properties
which sets up a new level
* once inserted at the bottom of the tree while retaining heap properties, check the node's parent.
if it's more than the node inserted, swap it until you get to the root or stop condition

extract_min():
- this extraction will remove the root node and return it, but also has to make sure it replaces
- the root to retain the min-heap properties. it is also run in O(log(n)) time.
- algorithm:
* swap the bottom most right most element in the min-heap with the root
* take the root and determine if either of its child nodes are smaller than the root. if node.left < root, swap left
or if node.right is smaller than root then swap right.  continue to do this until you get to a point where
the node you are at is smaller than its child nodes (retaining min-heap properties)

Implementation: (https://www.cs.cmu.edu/~tcortina/15-121sp10/Unit06B.pdf)
- Can be implemented with an array, where the root is at position 1
- For any node in position i,
-- left node is @ position 2i
-- right node is @ position 2i+1
-- parent of any node is i/2 (using integer division)

i.e. [5,14,23]
   5
  / \
14   23
*/


// https://coderpad.io/TTW4PNCA
function MinHeap() {
  // setup store to have first index at 0 to be null, to account for integer division
  this.store = [null];
  this.parent = function (idx) {
    // return parent, which is the index i - 1 /2
    return this.store[(idx)/2];
  };
  this.leftChild = function (idx) {
    return this.store[2*idx];
  };
  this.rightChild = function (idx) {
    return this.store[(2*idx) + 1];
  };
  this.insert = function (key) {
    this.store.push(key);
    this._bubbleUp(this.store.length-1, key);
  };
  this.extractMinimum = function () {
    if (this.store) {
      var root = this.store[1];
      // Replace last elem in the heap as root and remove last elem in heap
      var lastElemValue = this.store[this.store.length-1];
      this.store[1] = lastElemValue;
      this.store.pop();

      this._bubbleDown(1, lastElemValue);

      return root;
    }
  };
  this._bubbleUp = function (idxInsertedElem, key) {
    var parent = this.parent(idxInsertedElem);
    if (parent > key) {
      // swap
      var temp = parent;
      this.store[idxInsertedElem/2] = key;
      this.store[idxInsertedElem] = parent;
      // continue to swap if we reached this case
      this._bubbleUp(idxInsertedElem/2, key);
    }
  };
  this._bubbleDown = function (idxInsertedElem, key) {
    // Swap last elem in the heap with the root, and recurse
    // until we maintain the min heap property
    var leftChild = this.leftChild(idxInsertedElem);
    var rightChild = this.rightChild(idxInsertedElem);
    if (leftChild < key) {
      // swap
      var temp = leftChild;
      this.store[2*idxInsertedElem] = key;
      this.store[idxInsertedElem] = temp;
      this._bubbleDown(2*idxInsertedElem);
    } else if (rightChild < key) {
      var temp = rightChild;
      this.store[2*idxInsertedElem + 1] = key;
      this.store[idxInsertedElem] = temp;
      this._bubbleDown(2*idxInsertedElem + 1);
    }
  }
}

var heap = new MinHeap();
heap.insert(4);
heap.insert(50);
heap.insert(7);
heap.insert(2);
console.log(heap.store);

// now extract min
heap.extractMinimum();
console.log(heap.store);

heap.insert(5);
console.log(heap.store);

heap.extractMinimum();
console.log(heap.store);
