// CTCI 4.2 given an increasing sequential array, construct a minimum height binary search tree

var BST = function() {
  this.root = null;
};

var Node = function (key) {
  this.left = null;
  this.right = null;
  this.value = key;
};

BST.prototype.insertMinHeight = function(arr) {
  var length = arr.length;

  var rootMidIdx = Math.floor((length-1)/2);

  if (rootMidIdx) {
    this.root = this.insert(this.root, arr[rootMidIdx]);
    this._insertRecursively(arr, 0, rootMidIdx-1);
    this._insertRecursively(arr, rootMidIdx+1, arr.length-1);
  }
}

BST.prototype._insertRecursively = function(arr, startIdx, endIdx) {
  var midIdx = Math.floor((endIdx+startIdx)/2);

  if (endIdx < startIdx || startIdx > endIdx) return;

  console.log(arr[midIdx]);
  this.insert(this.root, arr[midIdx]);
  this._insertRecursively(arr, startIdx, midIdx-1);
  this._insertRecursively(arr, midIdx+1, endIdx);
}

BST.prototype.insert = function (node, key) {
  if (!node) {
    node = new Node(key);
    return node;
  }
  if (node.value === key) return;
  if (node.value > key) {
    // parent is bigger than input, so insert to left
    node.left = this.insert(node.left, key);
  }
  else if (node.value < key) {
    // parent smaller than input, insert right
    node.right = this.insert(node.right, key);
  }
  return node;
}

BST.prototype.inOrderTraversal = function (node) {
 if (node) {
    this.inOrderTraversal(node.left);
    console.log(node.value);
    this.inOrderTraversal(node.right);
 }
}

function startTestInsertion() {
  var bst = new BST();
  bst.root = bst.insert(bst.root, 4);
  bst.insert(bst.root, 1);
  bst.insert(bst.root, 3);
  bst.insert(bst.root, 5);
  bst.insert(bst.root, 8);
  console.log('inorder traversal');
  bst.inOrderTraversal(bst.root);
}

function startTestMinimumHeightTreeInsertion() {
  var bstMin = new BST();
  var inputArr = [1,3,4,5,8];
  bstMin.insertMinHeight(inputArr);
  console.log('in order traversal')
  bstMin.inOrderTraversal(bstMin.root);
}

//startTestInsertion();
startTestMinimumHeightTreeInsertion();
