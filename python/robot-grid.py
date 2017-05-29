import random
# robot in top left corner (0,0) of m cols and n rows. there are some points that are blocked. find path
# that allows you to travel to lowest bottom right of the grid.
# 8.2 cracking the coding interview v6

def generateArr(row, col):
    return [[random.randint(0,1) for x in range(row)] for y in range(col)]

def findPath(row, col):
    matrix = [[1,0,0,0,0], [1,0,0,1,1], [1,1,1,1,1], [1,1,1,0,1]] #generateArr(row, col)
    print matrix
    currentPoint = {'x': 0, 'y':0}
    targetPoint = {'x': row-1, 'y': col-1}
    return hasPath(matrix, [], currentPoint, targetPoint)

def hasPath(matrix, visited, currentPoint, targetPoint):
    currentPointX = currentPoint['x']
    currentPointY = currentPoint['y']

    if currentPoint['x'] == targetPoint['x'] and currentPoint['y'] == targetPoint['y']:
        visited.append(currentPoint)
        return visited

    # bounds check
    if currentPointX > targetPoint['x'] or currentPointY > targetPoint['y']:
        return None

    moveRight = {'x' : currentPoint['x'] + 1, 'y': currentPoint['y']}
    moveDown = {'x' : currentPoint['x'], 'y': currentPoint['y'] + 1}

    if matrix[currentPoint['x']][currentPoint['y']]:
        visited.append(currentPoint)
        return hasPath(matrix, visited, moveRight, targetPoint) or hasPath(matrix, visited, moveDown, targetPoint)
    else:
        return None
    return visited

print('Resulting path:', findPath(4, 5))
