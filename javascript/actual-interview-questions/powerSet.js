/* find powerset*/

function findAllSubsets(arr) {
  var fullSet = [[]];// start out with empty set
  for(var i = 0; i < arr.length; i++) {
      var cloned = cloneSubArrays(fullSet);
      for (var j = 0; j < cloned.length; j++) {
        cloned[j].push(arr[i]);
        fullSet.push(cloned[j]);
      }
  }
  return fullSet;
}

function cloneSubArrays(set) {
  var cloned = [];
  for (var i = 0; i < set.length; i++) {
    cloned.push(cloneValues(set[i]));
  }
  return cloned;
}

function cloneValues(set) {
  var cloned = [];
    for (var i = 0; i < set.length; i++) {
    cloned.push(set[i]);
  }
  return cloned;
}
// Test cloning
function testCloning() {
  var origSet = [[], [1], [2], [[1,2]]];
  var cloned = cloneSubArrays(origSet);
  console.log(cloned);
  console.log(origSet);
}

function testFindAllSubsets() {
  var sets = findAllSubsets([1,2]);
  console.log('Subsets for set [1,2]:');
  console.log(sets);

  // Test finding all subsets
  var sets = findAllSubsets([1,2,3]);
  console.log('Subsets for set [1,2,3]:');
  console.log(sets);
}

testFindAllSubsets();
