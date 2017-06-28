// Given a graph, run DFS on it

var Graph = function () {
  this.nodes = [];
}

var Node = function (val) {
  this.adjList = [];
  this.value = val;
  this.visited = false;
}

Graph.prototype.addNode = function(value) {
   var node = new Node(value);
   this.nodes.push(node);
}

Graph.prototype.addEdge = function(x, y) {
  var nodeX;
  var nodeY;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === x) {
      nodeX = this.nodes[i];
    }
    if (this.nodes[i].value === y) {
      nodeY = this.nodes[i];
    }
  }
  nodeX.adjList.push(nodeY);
  nodeY.adjList.push(nodeX);
}

Graph.prototype.DFS = function(node) {
  if (!node) {
    return;
  }
  console.log(node.value);
  node.visited = true;
  for (var i = 0; i < node.adjList.length; i++) {
    if (node && !node.visited) {
      this.DFS(node.adjList[i]);
    }
  }
}

Graph.prototype.iterativeDFS = function(root) {
  // use a stack
  if (root) {
    var stack = [];
    stack.push(root);
    while(stack.length > 0) {
      var node = stack.pop();
      if (!node.visited) {
        console.log(node.value);
        node.visited = true;
        for (var i = 0; i < node.adjList.length; i++) {
          var child = node.adjList[i];
          if (!child.visited) {
            stack.push(child);
          }
        }
      }
    }
  }
}

function setupTest() {
  var graph = new Graph();
  graph.addNode('A');
  graph.addNode('B');
  graph.addEdge('A', 'B');
  graph.addNode('C');
  graph.addEdge('B','C');
  graph.addNode('D');
  graph.addEdge('A','D');
  console.log(graph);
  console.log('iterative dfs');
  graph.iterativeDFS(graph.nodes[0]);
}

setupTest();
