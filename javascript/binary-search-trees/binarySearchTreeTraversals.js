function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.insert = function (node, key) {
    if (!node) {
      var newNode = new TreeNode(key);
      if (!this.root) {
        this.root = newNode;
      }
      return newNode;
    }
    if (key == node.value) {
      // Do not add an already exising value to the BST
      return;
    }
    if (key < node.value) {
      node.left = this.insert(node.left, key);
    }
    if (key > node.value) {
      node.right = this.insert(node.right, key);
    }
    return node;
  }
}

function levelOrderTraversal(root) {
  var q = [];
  q.push(root);
  while (q.length > 0) {
    var node = q.pop();
    console.log(node.value);
    if (node.left) {
      q.push(node.left);
    }
    if (node.right) {
      q.push(node.right);
    }
  }
}

function inOrderTraversal(node) {
  if (node) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
}

function preOrderTraversal(node) {
  if (node) {
    console.log(node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}

function postOrderTraversal(node) {
  if (node) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value);
  }
}

// First, test if BST/Level Order Traversal works properly with a manually set up tree (not using BinaryTree implementation)
// Test function to set up tree
function manualTreeSetup() {
  var root = new TreeNode(5);
  root.left = new TreeNode(3);
  root.right = new TreeNode(7);
  return root;
}
var testTree = manualTreeSetup();
console.log('start printing tree');
levelOrderTraversal(testTree);

// Now try to set up the tree and print it out, then run BFS/Level Order Traversal
function setupBinarySearchTree() {
  var bst = new BinarySearchTree();
  bst.insert(bst.root, 5);
  bst.insert(bst.root, 2);
  bst.insert(bst.root, 7);
  bst.insert(bst.root, 10);
  bst.insert(bst.root, 6);
  bst.insert(bst.root, 1);
  bst.insert(bst.root, 3);
  // shouldn't insert
  bst.insert(bst.root, 5);
  console.log(bst);
  return bst;
}
console.log('setup binary search tree');
var bst = setupBinarySearchTree();

console.log('inOrderTraversal start');
inOrderTraversal(bst.root);
console.log('levelOrderTraversal start');
levelOrderTraversal(bst.root);
console.log('preOrderTraveral start');
preOrderTraversal(bst.root);
console.log('postOrderTraversal start');
postOrderTraversal(bst.root);
