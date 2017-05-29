# permutation of steps given n steps and can jump 1 or 2 or 3 steps at a time
# pg 134 cracking coding interview question 8.1

# algo is O(3^n) since it branches out 3 ways per node
def countSteps(n):
    if n < 0:
        return 0
    if n == 0 or n == 1:
        return 1
    return countSteps(n-1) + countSteps(n-2) + countSteps(n-3)

print 'starting count steps'
print countSteps(1)
print countSteps(2)
print countSteps(3)
print countSteps(4)
print countSteps(5)
print countSteps(6)

def countStepsMemo(n, memcache={}):
    if n < 0:
        return 0
    if n == 0 or n == 1:
        return 1
    if memcache and memcache[n]:
        return memcache[n]
    memcache[n] = countStepsMemo(n-1, memcache) + countStepsMemo(n-2, memcache) + countStepsMemo(n-3, memcache)
    return memcache[n]

print 'starting count steps memo'
print countStepsMemo(1, {})
print countStepsMemo(2, {})
print countStepsMemo(3, {})
print countStepsMemo(4, {})
print countStepsMemo(5, {})
print countStepsMemo(6, {})
