// Get largest area in map algo - recursive backtracking

var Graph = function () {
  this.nodes = [];
}

Graph.prototype.printValues = function () {
  var printMap = [];
  for (var i = 0; i < this.nodes.length; i++) {
    printMap.push([]);
    for (var j = 0; j < this.nodes[i].length; j++) {
      printMap[i].push(this.nodes[i][j].value);
    }
  }
  console.log(printMap);
}

Graph.prototype.resetVisited = function () {
  for (var i = 0; i < this.nodes.length; i++) {
    for (var j = 0; j < this.nodes[i].length; j++) {
      this.nodes[i][j].visited = false;
    }
  }
}

Graph.prototype.getLargestArea = function() {
  var maxArea = 0;
  for (var i = 0; i < this.nodes.length; i++) {
    for (var j = 0; j < this.nodes[i].length; j++) {
      this.resetVisited();
      var getAreaOfCoord = this.getAreaFromCoordinate(i, j);
      if (getAreaOfCoord > maxArea) {
        maxArea = getAreaOfCoord;
      }
    }
  }

  return maxArea;
}

Graph.prototype.getAreaFromCoordinate = function (x, y) {
  if (x < 0 || y < 0 || x >= this.nodes.length || y >= this.nodes[x].length) {
    return 0;
  }

  if (this.nodes[x][y].visited) {
    return 0;
  } else {
    this.nodes[x][y].visited = true;
  }

  if (this.nodes[x][y].value === 'L') {
    return 1 +
      this.getAreaFromCoordinate(x+1, y) +
      this.getAreaFromCoordinate(x-1, y) +
      this.getAreaFromCoordinate(x, y+1) +
      this.getAreaFromCoordinate(x, y-1);
  }

  return 0;
}

var Node = function (value) {
  this.value = value;
  this.visited = false;
}

var input1 = [
  'L,.,.,L'.split(','),
  'L,L,.,.'.split(','),
  'L,L,.,.'.split(','),
  '.,.,.,.'.split(',')
];

var input2 = [
  'L,.,.,L,L,L,L'.split(','),
  'L,L,.,.,L,L,L'.split(','),
  'L,L,.,.,L,L,L'.split(','),
  '.,.,.,.,L,L,L'.split(',')
];

function createMap(input) {
  var map = new Graph();
  for (var i = 0; i < input.length; i++) {
    map.nodes.push([]);
    for (var j = 0; j < input[i].length; j++) {
       var node = new Node(input[i][j]);
       map.nodes[i].push(node);
    }
  }
  return map;
}

var map1 = createMap(input1);
map1.printValues();
console.log(map1.getLargestArea());

var map2 = createMap(input2);
map2.printValues();
console.log(map2.getLargestArea());
