/* A min-heap is when you have a complete binary tree where the parent node is
* always smaller than its children nodes.
There are two main functions that a min heap can be implemented with which both result
in O(log(n)) time:
insert(node n):
- this inserts a given node into the tree while maintaining the min-heap properties.
- algorithm:
* insert the node into the next available spot in the given data structure
that will retain the heap properties:
** if level is not filled, go to right most node and insert it in left if empty; right if not
** if level is filled, insert it in the left most portion of the tree to maintain heap properties
which sets up a new level
* once inserted at the bottom of the tree while retaining heap properties, check the node's parent.
if it's more than the node inserted, swap it until you get to the root or stop condition

extract_min():
- this extraction will remove the root node and return it, but also has to make sure it replaces
- the root to retain the min-heap properties. it is also run in O(log(n)) time.
- algorithm:
* swap the bottom most right most element in the min-heap with the root
* take the root and determine if either of its child nodes are smaller than the root. if node.left < root, swap left
or if node.right is smaller than root then swap right.  continue to do this until you get to a point where
the node you are at is smaller than its child nodes (retaining min-heap properties)

Implementation: (https://www.cs.cmu.edu/~tcortina/15-121sp10/Unit06B.pdf)
- Can be implemented with an array, where the root is at position 1
- For any node in position i,
-- left node is @ position 2i
-- right node is @ position 2i+1
-- parent of any node is i/2 (using integer division)

i.e. [5,14,23]
   5
  / \
14   23
*/

var minHeap {
  var storeHeap = [];
  function insert(n) {
    storeHeap.push(n);
    var idxInsertedElem = storeHeap.length/2;
    if (arr[idxInsertedElem]) {

    }
  },
  function extractMinimum() {

  }
}
