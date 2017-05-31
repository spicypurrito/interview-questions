# magic number 8.3 a[i] == i in distinct increasing array of integers

#brute force

def magicNumBrute(arr):
    for i in range(len(arr)):
        if arr[i] == i:
            return i
    return -1

print 'brute force'
print (magicNumBrute([-20,-10,2]))
print (magicNumBrute([-20,-10,-5,3,10]))
print (magicNumBrute([-20,-10,-5,4,10]))

def magicNum(arr):
    return magicNumRecurse(arr, 0, len(arr))

def magicNumRecurse(arr, startIdx, endIdx):
    midIdx = (startIdx + endIdx) / 2
    if startIdx > endIdx or endIdx < startIdx:
        return -1
    if arr[midIdx] == midIdx:
        return midIdx
    if arr[midIdx] > midIdx:
        return magicNumRecurse(arr, startIdx, midIdx-1)
    if arr[midIdx] < midIdx:
        return magicNumRecurse(arr, midIdx+1, endIdx)

print 'recurse'
print (magicNum([-20,-10,2]))
print (magicNum([-20,-10,-5,3,10]))
print (magicNum([-20,-10,-5,4,10]))
