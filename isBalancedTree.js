var isBalanced = function(root) {
    if (root) {
      if (Math.abs(getMaxDepth(root.left) - getMaxDepth(root.right)) > 1) {
        return false;
      }
      return isBalanced(root.left) && isBalanced(root.right);
    }
    return true;
}

var getMaxDepth = function(node) {
  var lDepth = 0;
  var rDepth = 0;
  if (!node) return 0;
  lDepth = 1 + getMaxDepth(node.left);
  rDepth = 1 + getMaxDepth(node.right);
  return Math.max(lDepth, rDepth);
}

// false
var r = {
  value : 5,
  left: {
    value: 10,
    left: {
      value: 11
    }
  }
}

// true
var r1 = {
  value : 1
}

// true
var r2 = {
  value : 5,
  left: {
    value: 10
  }
}

// false
var r3 = {
  value : 5,
  right : {
    value: 3,
    left: {
      value: 1
    }
  }
}

var r4 = {
  value : 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: {
        value: 4
      }
    }
  },
  right: {
    value: 2,
    right: {
      value: 3,
      right: {
        value: 4
      }
    }
  },
}

var r5 = {
  value : 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: {
        value: 4
      }
    },
    right: {
      value: 5
    }
  },
  right: {
    value: 6,
    right: {
      value: 7,
      right: {
        value: 8
      }
    }
  },
}


var r6 = {
  value : 2,
  left: {
    value: 1
  },
  right: {
    value: 4,
    right: {
      value: 6,
      left: {
        value: 5
      }
    },
    left: {
      value: 3
    }
  },
}

console.log(isBalanced(r) === false);
console.log(isBalanced(r1) === true);
console.log(isBalanced(r2) === true);
console.log(isBalanced(r3) === false);
console.log(isBalanced(r4) === false);
console.log(isBalanced(r5) === false);
console.log(isBalanced(r6) === false);
