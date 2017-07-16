var isBalancedHelper = function(root, leftHeight, rightHeight) {
    if (root) {
        isBalancedHelper(root.left, leftHeight+1, rightHeight);
        isBalancedHelper(root.right, leftHeight, rightHeight+1);
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }
    }
    return true;
}

var isBalanced = function(root) {
    return isBalancedHelper(root, 0, 0);
};
