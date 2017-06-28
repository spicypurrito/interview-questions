// BST implementation of BFS where each node has a string, and it is an ordered BST.
// Given an input string, find the string and determine whether or not the tree contains it

// https://www.glassdoor.com/Interview/Twitch-Interview-Questions-E639426.htm

var BST = function () {
  this.root = null;
  this.orderedString = '';
}

var Node = function (key) {
  this.value = key;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(node, key) {
  if (!node) {
    return new Node(key);
  }
  if (node.value < key) {
    node.right = this.insert(node.right, key);
  } else if (node.value > key) {
    // parent is larger than input, so recurse over left side of tree
    node.left = this.insert(node.left, key);
  }
  return node;
}

BST.prototype.inOrderTraversal = function (node) {
  if (node) {
    this.inOrderTraversal(node.left);
    this.orderedString = this.orderedString + node.value;
    this.inOrderTraversal(node.right);
  }
}

BST.prototype.DFS = function (node, inputString) {
  if (node) {
    this.inOrderTraversal(node.left);
    this.orderedString = this.orderedString + node.value;
    this.inOrderTraversal(node.right);
  }
  return false;
}

BST.prototype.BFS = function (node, inputString) {
  var queue = [];
  queue.push(node);
  while (queue.length > 0) {
    var node = queue.shift(); // get from the front of the array; FIFO
    if (node.value === inputString) return true;
    if (node.left) {
      queue.push(node.left, inputString);
    } else if (node.right) {
      queue.push(node.right, inputString);
    }
  }
  return false;
}

function setupTree() {
  var bst = new BST();
  bst.root = bst.insert(bst.root, 'pancake');
  bst.insert(bst.root, 'ace');
  bst.insert(bst.root, 'twitch');
  bst.insert(bst.root, 'hello');
  bst.insert(bst.root, 'you');
  bst.insert(bst.root, 'zed');
  bst.insert(bst.root, 'jam');
  bst.inOrderTraversal(bst.root);
  console.log(bst.orderedString);

  console.log(bst.BFS(bst.root, 'ace'));
  console.log(bst.BFS(bst.root, 'kdfjslkjflksdj'));
}

setupTree();
