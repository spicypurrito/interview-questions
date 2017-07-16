var isPerfectSquare = function(num) {
    var x = 1;
    var output = 1;
    while(output < num) {
      output = x*x;
      x++;
    }
    if (output === num) {
        return true;
    }
    return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(5));
