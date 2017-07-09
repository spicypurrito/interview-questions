var Graph = function() {
  this.root = null;
  this.nodes = [];
}

var Node = function(value) {
  this.value = value;
  this.visited = false;
  this.adjList = [];
}

Graph.prototype.insert = function (value) {
  if (this.get(value)) {
    console.log('Duplicate value ' + value + ' was not added to the graph.');
    return;
  }
  var node = new Node(value);
  if (!this.nodes.length) {
    this.root = node;
  }
  this.nodes.push(node);
}

Graph.prototype.get = function (value) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === value) {
      return this.nodes[i];
    }
  }
}

/* Adds an undirected graph edge to the graph. e1 and e2 will contain
each other in its adj lists */
Graph.prototype.addEdge = function (val1, val2) {
  var length = this.nodes.length;
  var node1;
  var node2;
  for (var i = 0; i < length; i++) {
    var node = this.nodes[i];
    if (node.value === val1) {
      node1 = node;
    }
    if (node.value === val2) {
      node2 = node;
    }
  }
  node1.adjList.push(node2);
  node2.adjList.push(node1);
}

Graph.prototype.depthFirstSearch = function(node) {
  if (node && !node.visited) {
    console.log(node.value);
    node.visited = true;
    var length = node.adjList.length;
    for (var i = 0; i < length; i++) {
      this.depthFirstSearch(node.adjList[i]);
    }
    return;
  }
}

Graph.prototype.resetVisited = function() {
  var length = this.nodes.length;
  for (var i = 0; i < length; i++) {
    this.nodes[i].visited = false;
  }
  return;
}

Graph.prototype.breadthFirstSearch = function(node) {
  if (node) {
    var q = [];
    q.push(node);
    while(q.length) {
      var n = q.shift();
      if (!n.visited) {
        console.log(n.value);
        n.visited = true;
        var length = n.adjList.length;
        for (var i = 0; i < length; i++) {
          q.push(n.adjList[i]);
        }
      }
    }
  }
  return;
}

function setupGraph() {
  var graph = new Graph();
  graph.insert('A');
  graph.insert('B');
  graph.insert('C');
  graph.insert('D');
  graph.insert('E');
  graph.insert('F');
  graph.addEdge('A','B');
  graph.addEdge('A','E');
  graph.addEdge('B','C');
  graph.addEdge('B','D');
  graph.addEdge('E','F');
  return graph;
}

function testTraversals() {
  var graph = setupGraph();
  console.log('Start depth first search.');
  graph.depthFirstSearch(graph.root);
  graph.resetVisited();
  console.log('Start breadth first search.');
  graph.breadthFirstSearch(graph.root);
}

testTraversals();
