/*
  Algorithm: There are 3 ways a child can run up n steps. 1,2,3 steps at a time.
  So, let's talk about our base case.  If n = 1, then we want to set n - 1 as
  a step given how we recurse. So, 0 as our base case will count as a step vs
  having it count as 1, since we need to do a little more base case handling if we
  don't. See other implementation otherwise.

  Algo is O(3^n) since we branch out 3 ways given n steps.
*/
function numStairs(n) {
  if (n < 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }
  return numStairs(n-1) + numStairs(n-2) + numStairs(n-3);
}

console.log(numStairs(5));
console.log(numStairs(3));

function numStairs2(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (n === 3) {
    return 4;
  }
  return numStairs(n-1) + numStairs(n-2) + numStairs(n-3);
}

console.log(numStairs2(5));
console.log(numStairs2(3));

console.log('Number of stairs for both implementations are true:');
console.log( numStairs2(5) === numStairs(5));
