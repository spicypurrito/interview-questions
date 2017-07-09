/*
Detect a cycle in a linked list.
*/

var LinkedList = function() {
  this.head = null;
}

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.visited = false;
}

LinkedList.prototype.insert = function (value) {
  var node = new Node(value);
  var head = this.head;
  if (!this.head) {
    this.head = node;
  } else {
    var curr = head;
    while(curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }
}

LinkedList.prototype.insertCycle = function(insertIdx) {
  var cycle = this.head;
  var i = 0;
  while(i < insertIdx) {
    cycle = cycle.next;
    i++;
  }
  var curr = cycle;
  while (curr.next) {
    curr = curr.next;
  }
  curr.next = cycle;
}

LinkedList.prototype.print = function (value) {
  var head = this.head;
  var curr = head;
  while(curr) {
    console.log(curr.value);
    curr = curr.next;
  }
}

LinkedList.prototype.hasCycle = function () {
    var curr = this.head;
    while (curr.next) {
        if (curr.visited) {
            return true;
        }
        curr.visited = true;
        curr = curr.next;
    }
    return false;
}

function setupListWithCycle() {
  var list = new LinkedList();
  list.insert(5);
  list.insert(3);
  list.insert(8);
  list.insert(10);
  list.print();
  list.insertCycle(2);
  console.log('Has cycle: ' + list.hasCycle());
}

function setupListWithoutCycle() {
  var list = new LinkedList();
  list.insert(5);
  list.insert(3);
  list.insert(8);
  list.insert(10);
  list.print();
  console.log('Has cycle: ' + list.hasCycle());
}

setupListWithCycle();
setupListWithoutCycle();
