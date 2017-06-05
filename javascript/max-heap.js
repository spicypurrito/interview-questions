// Implement max heap which is min heap but diff conditionals
// https://coderpad.io/TTW4PNCA
function MaxHeap () {
  // Set store[0] to null since we want to retain property of retrieving parent/children properly via idx vs idx-1
  this.store = [null];
  this.parent = function (idx) {
    var parentIdx = Math.floor(idx/2);
    return this.store[parentIdx];
  };
  this.left = function (idx) {
    return this.store[2*idx];
  };
  this.right = function (idx) {
    return this.store[2*idx+1];
  };
  this.insert = function (key) {
    this.store.push(key);
    this._bubbleUp(this.store.length-1, key);
  };
  this.extractMaximum = function () {
    // if there is a root
    var root = this.store[1];
    if (root) {
      this.store[1] = this.store.pop();
      // bubble down against the last element in the heap that is now at the root
      this._bubbleDown(1, this.store[1]);
      return root;
    }
  };
  this._bubbleUp = function (idx, key) {
    var parent = this.parent(idx);

    // If parent is smaller than the key, then bubble the max of the two up
    if (parent && parent < key) {
      this.store[idx] = parent;
      this.store[Math.floor(idx/2)] = key;
      this._bubbleUp(Math.floor(idx/2), key);
    }
  };
  this._bubbleDown = function (idx, key) {
    var leftChild = this.left(idx);
    var rightChild = this.right(idx);
    if (leftChild < key) {
      this.store[2*idx] = key;
      this.store[idx] = leftChild;
      this._bubbleDown(2*idx, key);
    } else if (rightChild) {
      this.store[2*idx+1] = key;
      this.store[idx] = leftChild;
      this._bubbleDown(2*idx+1, key);
    }
  }
}

console.log('MAX HEAP TESTS');
var maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(10);
maxHeap.insert(20);
console.log(maxHeap.store);

maxHeap.extractMaximum();
console.log(maxHeap.store);

maxHeap.insert(2);
maxHeap.insert(60);
console.log(maxHeap.store);

maxHeap.extractMaximum();
console.log(maxHeap.store);
