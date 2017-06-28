// Implementation linked list

var LinkedList = function () {
  this.head = null;
  this.tail = null;
}

var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// O(n) run time
LinkedList.prototype.insert = function(value) {
  if (!this.head) {
    this.head = new Node(value);
    this.tail = this.head;
  } else {
    var current = this.head;
    while (current.right) {
      current = current.right;
    }
    current.right = new Node(value);
    current.right.left = current;
    this.tail = current.right;
  }
}

LinkedList.prototype.print = function() {
  var current = this.head;
  while (current) {
    console.log(current.value);
    current = current.right;
  }
}

LinkedList.prototype.find = function(k) {
  var current = this.head;
  while(current) {
    if (current.value === k) {
      return current;
    }
    current = current.right;
  }
  return null;
}

LinkedList.prototype.remove = function(k) {
  var node = this.find(k);

  if (!node) return;

  var prevNode = node.left;
  var nextNode = node.right;

  if (this.head === node && this.tail === node) {
    node = null;
    this.head = null;
    this.tail = null;
    return;
  } else if (this.head === node) {
    this.head = nextNode;
    node = null;
    return;
  } else if (this.tail === node) {
    this.tail = prevNode;
    node = null;
    return;
  } else {
    prevNode.right = nextNode;
    nextNode.left = prevNode;
    node = null;
    return;
  }
  return;
}

function setupList(){
  var list = new LinkedList();
  list.insert(5);
  list.insert(10);
  list.insert(50);
  list.insert(23);
  list.print();
  console.log(list.find(23));
  list.remove(50);
  list.print();
}

setupList();
