var toggleDoors = function(num) {
  // set up array with num doors to 0
  var doors = Array(num).fill(0);

  // for each i, increment and set j * i for the door to toggle
  // O(n*(n/i)) => O(n^2)
  for(var i = 1; i < num; i++) {
    for (var j = 1; j < Math.floor(num/i);) {
      if (doors[j-1]) {
        doors[j-1] = 0;
      } else {
        doors[j-1] = 1;
      }

      j = (j+1)*i;
    }
  }

  return doors;
}

console.log(toggleDoors(5));
console.log(toggleDoors(3));
console.log(toggleDoors(4));
