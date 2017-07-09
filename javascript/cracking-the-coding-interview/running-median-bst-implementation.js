/* Running median problem:
Let's say you have a stream input of numbers and you want to find the median.
Currently proposed algorithm:
- Use a binary search tree implementation.
- Insert as we get a stream = O(log(n)); worst case: O(n); O(n) storage
- In order traversal (O(n)) ; insertion into array: O(n) storage
- Get median: O(1) time
- Total run time: O(log(n)) + O(n) + O(1) => O(n)
- Total storage: O(n) + O(n) => O(n)
*/

var BST = function () {
  this.root = null;
}

var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(key) {
  if (!this.root) {
    this.root = this.insertHelper(null, key);
  } else {
    this.insertHelper(this.root, key);
  }
}

BST.prototype.insertHelper = function(node, key) {
  if (!node) {
    var node = new Node(key);
    return node;
  }

  if (key === node.value) {
    return node;
  }

  if (key < node.value) {
    node.left = this.insertHelper(node.left, key);
  }

  if (key > node.value) {
    node.right = this.insertHelper(node.right, key);
  }

  return node;
}

BST.prototype.inOrderTraversal = function(node) {
  if (node) {
    this.inOrderTraversal(node.left);
    console.log(node.value);
    this.inOrderTraversal(node.right);
  }
}

BST.prototype.inOrderTraversalInsert = function(node, arr) {
  if (node) {
    this.inOrderTraversalInsert(node.left, arr);
    arr.push(node.value);
    this.inOrderTraversalInsert(node.right, arr);
  }
}

BST.prototype.getMedian = function() {
  // insert into array
  var arr = [];
  this.inOrderTraversalInsert(this.root, arr);
  if (arr.length % 2 === 0) {
    var mid = Math.floor((arr.length -1)/ 2);
    return (arr[mid] + arr[mid+1]) / 2;
  }
  return arr[(arr.length-1)/2];
}

function setupTreeAndGetMedian() {
  var bst = new BST();
  bst.insert(5);
  bst.insert(10);
  bst.insert(6);

  console.log('In order traversal');
  bst.inOrderTraversal(bst.root);

  console.log('Median: ' + bst.getMedian());

  bst.insert(4);
  console.log('Median: ' + bst.getMedian());

  bst.insert(9);
  bst.insert(12);
  bst.inOrderTraversal(bst.root);
  console.log('Median: ' + bst.getMedian());
}

setupTreeAndGetMedian();
