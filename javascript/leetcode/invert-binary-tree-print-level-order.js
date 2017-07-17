var invertBinaryTree = function(root) {
  var q = [];
  q.push(root);
  while(q.length) {
    var node = q.shift();
    var tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;
    if (node.left) {
      q.push(node.left);
    }
    if (node.right) {
      q.push(node.right);
    }
  }
}

var printLevelOrder = function(root) {
  var q1 = [];
  var q2 = [];
  q1.push(root);
  var currentQueue = q1;
  var nextQueue = q2;
  var printStr = '';
  while(currentQueue.length || nextQueue.length) {
    var node = currentQueue.shift();
    printStr += node.value + ' ';
    if (node.left) {
      nextQueue.push(node.left);
    }
    if (node.right) {
      nextQueue.push(node.right);
    }
    if (currentQueue.length === 0) {
      console.log(printStr);
      printStr = '';
      currentQueue = currentQueue === q1 ? q2 : q1;
      nextQueue = nextQueue === q1 ? q2 : q1;
    }
  }
}

var r = {
  value: 4,
  left: {
    value: 2,
    left: {
      value: 1
    },
    right: {
      value: 3
    }
  },
  right: {
    value: 7,
    left: {
      value: 6
    },
    right: {
      value: 9
    }
  }
};

printLevelOrder(r);
invertBinaryTree(r);
printLevelOrder(r);
