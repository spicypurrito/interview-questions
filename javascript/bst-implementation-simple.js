// Run traversals on a binary search tree

var BST = function () {
  this.root = null;
}

BST.prototype.insert = function (value) {
  if (!this.root) {
    var node = new Node(value);
    this.root = node;
  } else {
    this.recursiveInsert(this.root, value);
  }
}

BST.prototype.recursiveInsert = function (node, k) {
  if (!node) {
    return new Node(k);
  }

  if (k === node.value) return;

  if (k < node.value) {
    node.left = this.recursiveInsert(node.left, k);
  } else if (k > node.value) {
    node.right = this.recursiveInsert(node.right, k);
  }

  return node;
}

// BST DFS implementation of in order traversal
BST.prototype.inOrderTraversal = function (node) {
  if (node) {
    this.inOrderTraversal(node.left);
    console.log(node.value);
    this.inOrderTraversal(node.right);
  }
}

// BST BFS implementation of going through the tree
// 5, 3, 8, 1, 15
BST.prototype.levelOrder = function (node) {
  var queue = [];
  // start of level order traversal, so push in the root
  queue.push(node);
  while (queue.length) {
    // first in first out
    var node = queue.shift();
    console.log(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}

var Node = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function setupTree() {
  var bst = new BST();
  bst.insert(5);
  bst.insert(3);
  bst.insert(8);
  bst.insert(1);
  bst.insert(15);

  console.log('in order traversal');
  bst.inOrderTraversal(bst.root);
  console.log('level order traversal');
  bst.levelOrder(bst.root);
  return bst;
}

console.log(setupTree());
