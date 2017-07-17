var Converter = function () {
  // setup last seen node var outside of serialize function to be updated throughout recursion
  var lastSeenNode = null;
  function serialize(node) {
      // set up variables head, tail
      // return is obj that contains head and tail pointers
      // { 'head' : head, 'tail' : tail}
      var head = null;
      var tail = null;
      if (node !== null) {
        if (node.left) {
          serializeHelper(node.left);
        }

        if (lastSeenNode === null) {
          head = lastSeenNode;
        } else {
          node.prev = lastSeenNode;
          lastSeenNode.next = node;
        }
        lastSeenNode = node;

        if (node.right) {
          serializeHelper(node.right);
        }
      } else {
        tail = lastSeenNode;
        // should return null for both if there is no node to process
        return {'head' : head, 'tail' : tail};
      }
  }

  // todo implementation
  function deserialize(head, tail) {
    var node = null;
    return node;
  }
}
