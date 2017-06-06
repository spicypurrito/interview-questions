// Graph and node implementation with adjacency list

var Graph = function () {
  this.nodes = [];
};

var Node = function () {
  this.value = null;
  this.visited = false;
  this.adjacencyList = [];
}

Graph.prototype.insert = function(node) {
  this.nodes.push(node);
}

Graph.prototype.addEdge = function (i,j) {
  // adds edge between node i and node j in the adjacency list
  var node = this.nodes[j];
  this.nodes[i].adjacencyList.push(node);
}

Graph.prototype.removeEdge = function(i, j) {
  var adjacencyList = this.nodes[i].adjacencyList;
  for (var k = 0; k < adjacencyList.length; k++) {
    if (adjacencyList[k].value === j) {
      adjacencyList.splice(k, 1);
      this.nodes[i].adjacencyList = adjacencyList;
    }
  }
}

Graph.prototype.depthFirstSearch = function (root) {
  if (!root) return;
  // viist root, whatever we want to do to set this up
  console.log(root.value);
  root.visited = true;
  root.adjacencyList.forEach(function(node) {
    if (node && !node.visited) {
      this.depthFirstSearch(node);
    }
  }.bind(this));
}

Graph.prototype.breadthFirstSearch = function (root) {
  if (!root) return;
  var queue = [];
  queue.push(root);
  while(queue.length > 0) {
    var node = queue.pop();
    node.visited = true;
    console.log(node.value);
    node.adjacencyList.forEach(function(node) {
      if (!node.visited) {
        queue.push(node);
      }
    }.bind(this));
  }
}

/****** TESTING *******/
// setup node list
function setupTest() {
  // Set up graph from cracking the coding interview
  var graph = new Graph();
  for (var i = 0; i < 6; i++) {
    var node = new Node();
    node.value = i;
    graph.insert(node);
  }
  // Test the insert, addEdge and removeEdge functions
  /*console.log(graph);
  graph.addEdge(1,5);
  graph.removeEdge(1,5);
  console.log(graph);*/
  graph.addEdge(0,1);
  graph.addEdge(0,4);

  graph.addEdge(0,5);

  graph.addEdge(1,3);
  graph.addEdge(1,4);

  graph.addEdge(2,1);

  graph.addEdge(3,2);
  graph.addEdge(3,4);
  return graph;
}

var graphDFS = setupTest();
console.log('START DEPTH FIRST SEARCH');
graphDFS.depthFirstSearch(graphDFS.nodes[0]);

var graphBFS = setupTest();
console.log('START BREADTH FIRST SEARCH');
graphBFS.breadthFirstSearch(graphBFS.nodes[0]);
