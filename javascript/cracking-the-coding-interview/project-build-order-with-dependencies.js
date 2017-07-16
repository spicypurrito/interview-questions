/*
 Page 110 CTCI v6 # 4.7
 Build order:
 Given list of projects; and a list of dependencies
 (which are all a list of projects, where second project is dependent on the first project)
 all of the project's dependencies must be built before the project is. find a build order that will allow the projects to be built
 if there is no valid build order, return an error

  Example:
  projects: a,b,c,d,e,f
  dependencies: (a,d), (f,b), (b,d), (f,a), (d,c)
*/

var Graph = function() {
  this.nodes = [];
  this.projectsNoDependencies = [];
  this.projectMap = {};
  this.projectList = [];
}

var Node = function(value) {
  this.value = value;
  this.adjList = [];
  this.hasDependencyLink = false;
  this.hasVisited = false;
}

Graph.prototype.insert = function(value) {
  var node = new Node(value);
  this.nodes.push(node);
}

Graph.prototype.addEdge = function(fromKey, toKey) {
  var fromNode;
  var toNode;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromKey) {
      fromNode = this.nodes[i];
    }
    if (this.nodes[i].value === toKey) {
      toNode = this.nodes[i];
    }
  }

  fromNode.adjList.push(toNode);
  fromNode.hasDependencyLink = true;
  toNode.hasDependencyLink = true;
}

Graph.prototype.depthFirstSearch = function(node) {
  if (node) {
    this.projectMap[node.value] = true;
    this.projectList.push(node.value);
    for(var i = 0; i < node.adjList.length; i++) {
      this.depthFirstSearch(node.adjList[i]);
    }
  }
}

Graph.prototype.breadthFirstSearch = function(node) {
  var q = [];
  q.push(node);
  while (q.length) {
    var node = q.shift();
    if (!node.hasVisited) {
      this.projectMap[node.value] = true;
      this.projectList.push(node.value);
      for (var i = 0; i < node.adjList.length; i++) {
        q.push(node.adjList[i]);
      }
      node.hasVisited = true;
    }
  }
}

Graph.prototype.resetProject = function() {
  this.projectList = [];
  this.projectMap = {};
  for (var i = 0; i < this.nodes.length; i++) {
    this.nodes[i].hasVisited = false;
  }
}

Graph.prototype.findBuildOrder = function() {
  // Overall runtime: Worse than O(N^2) than since it basically turns out to be O(numProjects * (numProjects+numDependencies))
  // increases with more dependencies
  var numNoDependencies = this.projectsNoDependencies.length;
  for (var i = 0; i < this.nodes.length; i++) { // O(numProjects)
    var node = this.nodes[i];
    this.breadthFirstSearch(node); // O(V+E) => O(numProjects + numDependencies)
    if (Object.keys(this.projectMap).length + numNoDependencies === this.nodes.length)     {
      return this.projectList.concat(this.projectsNoDependencies);
    } else {
      this.resetProject();
    }
  }
}

function buildProject(projects, dependencies) {
  var graph = new Graph();
  for (var i = 0; i < projects.length; i++) {
    graph.nodes.push(new Node(projects[i]));
  }
  // set up dependency edges
  for (var i = 0; i < dependencies.length; i++) {
    graph.addEdge(dependencies[i][0], dependencies[i][1]);
  }
  // push any projects that don't have dependencies into another list
  for (var i = 0; i < graph.nodes.length; i++) {
    if (!graph.nodes[i].hasDependencyLink) {
      graph.projectsNoDependencies.push(graph.nodes[i].value);
    }
  }

  console.log(graph);
  return graph;
}

function getBuildOrder(projects, dependencies) {
  // build graph
  // depth first search on each project as start node and determine if we
  // print out all projects
  // total run time: O(N^2)
  var project = buildProject(projects, dependencies); // O(numProjects + numDependencies)
  var order = project.findBuildOrder(); // O(N^2)
  if (order) {
    console.log(order);
    return order;
  } else {
    return "Could not find proper build order for given dependencies.";
  }
}

function setupTest() {
  var projects = ['a','b','c','d','e','f'];
  var dependencies = [['a','d'], ['f','b'], ['b','d'], ['f','a'], ['d','c']];
  var buildOrder = getBuildOrder(projects, dependencies);
  console.log(buildOrder);
}

setupTest();
