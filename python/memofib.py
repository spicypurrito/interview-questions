# memofib.py top down recursive approach and dynamic programming optimization
import time

# normal fib that takes up O(2^n) run time, since we grow the recursive tree (tip: draw it out!)
# twice for each node.  But what can we do more efficiently? Notice for fib(5), we recompute fib(3) etc
# multiple times...
def fib(n):
    if n == 0:
        return 0
    if n == 1 or n == 2:
        return 1
    return fib(n-1)+ fib(n-2)

# now, we want to be able to save the same things that we're computing over and over again.
# at any point in time, we might be computing memofib(n) multiple times in our computation. so save it
# in a cache, and compute. See that the resulting tree is actually O(n) at that point, since we have to compute at least
# n times (the height of the tree) in order to compute memofib(n)
def memofib(n, memcache={}):
    if n == 0:
        return 0
    if n == 1 or n == 2:
        return 1
    if memcache and memcache[n]:
        return memcache[n]
    memcache[n] = memofib(n-1, memcache) + memofib(n-2, memcache)
    return memcache[n]

print 'using normal fib'
start = time.time()
print fib(2)
print fib(5)
print fib(10)
print fib(23)
end = time.time()
timeFib = end-start

print 'using memofib'
startMemoFib = time.time()
print memofib(2, {})
print memofib(5, {})
print memofib(10,{})
print memofib(23, {})
endMemoFib = time.time()
timeMemoFib = endMemoFib-startMemoFib

print 'TimeMemoFib should be smaller than timeFib', timeMemoFib < timeFib
