# fib iterative bottom up. this is an O(n) algorithm

def bottomUpFib(n, memcache={}):
    sum = 0
    for itr in range(0, n+1):
        if itr == 0:
            memcache[itr] = 0
            continue
        elif itr == 1:
            memcache[itr] = 1
            sum += 1
            continue
        else:
            memcache[itr] = memcache[itr-1] + memcache[itr-2]
    return memcache[n]

print bottomUpFib(10)
