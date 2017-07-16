/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var q = [];
    q.push(root);
    var serialized = [];
    while(q.length) {
        var node = q.shift();
        if (node) {
          serialized.push(node.val);
        } else {
          serialized.push(null);
        }
        if (node) {
          if (node.left) {
            q.push(node.left);
          } else {
            q.push(null);
          }
          if (node.right) {
            q.push(node.right);
          } else {
            q.push(null);
          }
        }
    }
    return serialized.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  var q = [];

  if (!data) return null;

  var arr = data.split(',');
  var root = new TreeNode(parseInt(arr[0]));
  q.push(root);

  var i = 0;
  while(q.length) {
    var node = q.shift();
    var leftChild = parseInt(arr[2*i + 1]);
    var rightChild = parseInt(arr[2*i + 2]);
    if (!isNaN(leftChild)) {
      node.left = new TreeNode(leftChild);
    }
    if (!isNaN(rightChild)) {
      node.right = new TreeNode(rightChild);
    }

    if (node.left) {
      q.push(node.left);
    }
    if (node.right) {
      q.push(node.right);
    }
    i++;
  }
  return root;
};

var TreeNode = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function printTree(node) {
  if (node) {
    printTree(node.left);
    console.log(node.val);
    printTree(node.right);
  }
}

function setupTree() {
  var root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(5);

  console.log('tree1');
  var newTree = deserialize(serialize(root));
  printTree(newTree);

  console.log('tree2');
  var root2 = new TreeNode(1);
  var tree = deserialize(serialize(root2));
  printTree(tree);
}

setupTree();
