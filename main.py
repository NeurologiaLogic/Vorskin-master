dicto = {k:[] for k in range(8)}
exits=[]
# dicto[1].append(1)
# dicto[1].append(2)
# print(dicto[1])
graph = []
graph.append(1)
graph.append(2)
graph.append(3)
# print(graph.pop(0))
#n l e
#3 2 1
#[{1, 2}, {0, 1}, exit = 2]
#si lokation
# root = 1
# def BFS(graph, root, exits):
#    visited = [root]
#    minimum = 100000
#    counts = 0
#    while(graph[root]!=0):
#       visited.append(graph[root])
#       minimum = min(counts,minimum)
   # print(graph , root , exits)

# BFS(graph, root, exits)
#  1    Breadth-First-Search(Graph, root):
#  2
#  3     for each node n in Graph:
#  4        n.distance = INFINITY
#  5        n.parent = NIL
#  6
#  7     create empty queue Q
#  8
#  9    root.distance = 0
# 10   Q.enqueue(root)
# 11
# 12   while Q is not empty:
# 13
# 14       current = Q.dequeue()
# 15
# 16       for each node n that is adjacent to current:
# 17           if n.distance == INFINITY:
# 18               n.distance = current.distance + 1
# 19               n.parent = current
# 20              Q.enqueue(n)


from collections import defaultdict
class Graph:
   def __init__(self):
      self.graph = defaultdict(list)
   def addEdge(self,u,v):
      self.graph[u].append(v)
   def BFS(self,root):
      # visited = [False]*(1000)
      queue = []
      queue.append(root)
      # visited[root] = True
      # print("first : {}".format(root))
      count=0
      while queue:
         current = queue.pop(0)
         count+=1
         print(current)
         for i in self.graph[current]:
               # print(current)
            # if(visited[i]==False):
               queue.append(i)
               # visited[i]=True

bfs = Graph()
bfs.addEdge(0,2)
bfs.addEdge(0,1)
bfs.addEdge(3,5)
bfs.addEdge(3,2)
bfs.addEdge(8,4)
bfs.addEdge(2,10)
bfs.addEdge(1,9)
bfs.BFS(0)







