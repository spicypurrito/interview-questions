// Implement a function that determines if a binary tree is actually a binary tree

// Restrictions of binary tree
// only has 2 children (left and right) per node
// The left child is smaller than the node which is smaller than the right
// Do an in order traversal to determine if the thing being looked at is more than the previous int

var BST = function () {
  this.root = null;
}

var Node = function (val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(node, val) {
  if (!node) {
    var node = new Node(val);
    if (!this.root) {
       this.root = node;
    }
    return node;
  }

  if (node.value === val) {
    return node;
  }

  if (node.value < val) {
    node.right = this.insert(node.right, val);
  }
  if (node.value > val) {
    node.left = this.insert(node.left, val);
  }

  return node;
}

var bst = new BST();
bst.insert(null, 5);
bst.insert(bst.root, 10);
bst.insert(bst.root, 3);
console.log(bst);

// now just use node class to create stuff

var Tree = function () {
  this.root = null;
  this.isValid = null;
}

function setupTree() {
  var tree = new Tree();
  tree.root = new Node(5);
  tree.root.left = new Node(3);
  tree.root.right = new Node(10);
  // Toggle between here to check isBst = true vs isBst = false
  //tree.root.left.left = new Node(50);
  return tree;
}

Tree.prototype.determineValidity = function() {
  var arr = [];
  console.log(this);
  this.inOrderTraversalCheck(this.root, arr);
  console.log(arr);
  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i+1] < arr[i]) {
      return false;
    }
  }
  return true;
}

Tree.prototype.inOrderTraversalCheck = function(node, arr) {
  if (node) {
    this.inOrderTraversalCheck(node.left, arr);
    arr.push(node.value);
    this.inOrderTraversalCheck(node.right, arr);
  }
}

// Another solution that doesn't require array
Tree.prototype.isBst = function (node) {
   var lastElem = null;

  var traverse = function (node) {
    if (!node) return true;

    if (!traverse(node.left)) return false;

    if (!!lastElem && lastElem > node.value) {
      console.log('hyyy');
      console.log(lastElem);
      console.log(node.value);
      return false;
    }

    lastElem = node.value;

    if (!traverse(node.right)) return false;

    return true;
  }

  return traverse(node);
}

console.log("setting up tree");

var testTree = setupTree();
console.log(testTree.determineValidity());
console.log(testTree.isBst(testTree.root));
