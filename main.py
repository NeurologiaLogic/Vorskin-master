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
# class Graph:
#    def __init__(self):
#       self.graph = defaultdict(list)
#       self.path = defaultdict(list)
#    def addEdge(self,u,v):
#       self.graph[u].append(v)

#    def reversePathPrint(self,end):
#       rev_path = []
#       while(self.path[end]!=-1):
#          rev_path.append(self.path[end])
#          end = self.path[end]
#       rev_path.reverse()
#       print(rev_path)

#    def BFS(self,root,end):
#       visited = [False]*(1000)
#       queue = []
#       queue.append(root)
#       visited[root] = True
#       self.path[root] = -1
#       while queue:
#          current = queue.pop(0)
#          # print(current)
#          for i in self.graph[current]:
#                # print(current)
#             if(visited[i]==False):
#                queue.append(i)
#                self.path[i] = current
#                visited[i]=True
#       self.reversePathPrint(end)


# bfs = Graph()
# bfs.addEdge(0,2)
# bfs.addEdge(0,1)
# bfs.addEdge(3,5)
# bfs.addEdge(3,2)
# bfs.addEdge(8,4)
# bfs.addEdge(2,10)
# bfs.addEdge(1,3)
# bfs.addEdge(1,9)
# bfs.BFS(0,9)

import sys
import math
from collections import defaultdict
# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.
class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
        self.path = defaultdict(list)
        self.exits = []

    def add_edge(self,u,v):
        self.graph[u].append(v)

    def add_exits(self,exit):
        self.exits.append(exit)

    def reverse_path(self,end):
        path = []
        path.append(end)
        while(self.path[end]!=-1):
            path.append(self.path[end])
            end = self.path[end]
        path.reverse()
        print("{} {}".format(path[0],path[1]))
        for i in self.graph[path[0]]:
            # print(i)
            if(i==path[1]):
               # print(path[1])
               self.graph[path[0]].remove(i)
            # print(self.graph)


    def reset(self):
        self.graph = defaultdict(list)
        self.path = defaultdict(list)
        self.exits = []

    def BFS(self,root,n):
        #try to implement cost
        queue = []
        visited = [False]*(n+1)
        queue.append(root)
        visited[root] = True
        self.path[root] = -1
        found = False
        while(queue):
            if found:
                break
            current = queue.pop(0)
            for i in self.graph[current]:
                if(visited[i]==False):
                  visited[i]=True
                  queue.append(i)
                  self.path[i]=current
                  # print("exits")
                  for j in self.exits:
                     if(i==j):
                        found = True
                        # print("found")
                        return self.reverse_path(i)
# n: the total number of nodes in the level, including the gateways
# l: the number of links
# e: the number of exit gateways
exits=[]
n, l, e = [int(i) for i in input().split()]

graph = Graph()
for i in range(l):
    # n1: N1 and N2 defines a link between these nodes
    n1, n2 = [int(j) for j in input().split()]
    graph.add_edge(n1,n2)
for i in range(e):
    ei = int(input())  # the index of a gateway node
    graph.add_exits(ei)

# game loop
while True:
    si = int(input())  # The index of the node on which the Bobnet agent is positioned this turn
    graph.BFS(si,n)
    # Write an action using print
    # To debug: print("Debug messages...", file=sys.stderr, flush=True)


    # Example: 0 1 are the indices of the nodes you wish to sever the link between
    # print("1 2")
   #  print("nodes: {} links:{} exit:{}".format(n, l, e))
    # print("1 2")
    # find the bfs of the nodes close it
    # based on the closest neightbour

# 3 2 1
# 1 2
# 2 3
# 3




