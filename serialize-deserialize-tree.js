/*
Serialize binary tree into doubly linked list and deserialize into binary tree

Expected inputs:
- serialize
- parameters: root node of binary tree
- output: linked list containing serialized results

- deserialize
- parameters: linked list containing serialized results
- output: root node of binary tree

example
input to serialize
    2
  1   4
5    6
output
 2->1->4->5->null->6->null

 Assumptions:
 - if node exists in binary tree, a valid integer is in the node

Algorithm:
Serialize
- We can run a level order traversal against the binary tree, and for each node we
- process insert a new LinkNode in a linked list.
- If we run into a child that is null then we still store this value in the LinkedList with the node's value as null

Deserialize
- Initialize a queue which will keep track of the current node we are processing, and set the first node to
the head of the linked list. Run a while loop against a current pointer against the linked list, which is initially set to
the next LinkNode after the head pointer.  The popped item in the queue is the parent that we're processing, and set up
that parent's left node properly, push it in the queue, increment the current pointer, then set up the right node, push it in the queue
and increment the pointer. Return the root that we created from the beginning of the function.
*/

// Following classes we have available: Queue, LinkedList, Node (for binary tree)

// Runtime: O(n) for level order traversal; Storage: O(2^depth) since we are storing 2^depth nodes in linked list (including nulls)
function serialize(root) {
  var queue = new Queue();
  var list = new LinkedList();
  queue.enqueue(root);
  while(!queue.isEmpty()) {
    var node = queue.dequeue();
    list.insert(node); // should set head properly, create link node with next/prev pointers, and set the value to node
    queue.enqueue(node.left); // if node.left or node.right are null, we still want to enqueue it
    queue.enqueue(node.right);
  }
  return list;
}

// Runtime: O(2^depth) of original tree
function deserialize(list) {
  if (list.isEmpty()) {
    return null;
  }
  var current = list.head.next; // set current to node after head
  var root = new Node(list.head.value);
  var queue = new Queue();
  queue.enqueue(root);
  while(current) {
    var node = queue.dequeue();
    // set up left node
    if (node !== null) {
      if (list.current !== null && list.current.value !== null) {
        node.left = new Node(list.current.value);
        queue.enqueue(node.left);
      } else {
        node.left = null;
        queue.enqueue(null);
      }
    }
    current = current.next;

    // set up right node
    if (node !== null) {
      if (list.current !== null && list.current.value !== null) {
        node.right = new Node(list.current.value);
      } else {
        node.right = null;
        queue.enqueue(null);
      }
    }
    current = current.next;
  }
  return root;
}
