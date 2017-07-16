/*

Question

Given a binary tree T with the following properties:
T is rooted at node r
all right children in T are leaf nodes
there exists a single leaf node, l, which is not a right child
Transform T into T’ such that:
T’ is rooted at node l
All left children in T are leaf nodes
There exists a single leaf node, r, which is not a left child

Example A: r=Node(1), l=Node(2)

  1                      1                        2
 / \           ->       /            ->          / \
2   3                  2 - 3                    3   1

Example B: r=Node(1), l=Node(5)

      1                    1                   5
     / \                  /                   / \
    2   3                2 - 3               6   4
   /           ->       /            ->           \
  4                    4                           2
 / \                  /                           / \
5   6                5 - 6                       3   1

*/


function printTree(root) {
  if (!root) return null;
  var q1 = [];
  var q2 = [];
  var currentQueue = q1;
  var nextQueue = q2;
  q1.push(root);

  var currStr = '';

  while(q1.length || q2.length) {
    if (!currentQueue.length) {
     // change queue
      console.log(currStr);
      currStr = '';

      currentQueue = (currentQueue === q1) ? q2 : q1;
      nextQueue = (nextQueue === q1) ? q2 : q1;
    }

    var node = currentQueue.shift();
    currStr += node.value + ' ';

    if (node.left) {
     nextQueue.push(node.left);
    }
    if (node.right) {
     nextQueue.push(node.right);
    }
  }
  console.log(currStr);
}


var r = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 6
      },
      right: {
        value: 7
      }
    }
  },
  right: {
    value: 3
  }
}

//printTree(r);

// Traverse down to the left most node
//

function reorderTree(root) {
  if (!root) return null;
  var leftNode = reorderHelper(root, root.left, root.right);
  root.left = null;
  root.right = null;
  return leftNode;
}

function resetLink(node, left, right) {
  node.right = right;
  node.left = left;
}

function reorderHelper(root, left, right) {
  if (!left) return root;
  else {
    var leftNode = reorderHelper(left, left.left, left.right);
    resetLink(left, right, root);
    // bubble up
    return leftNode;
  }
}

var tree = reorderTree(r);
printTree(tree);

//console.log(reorderTree(r));
