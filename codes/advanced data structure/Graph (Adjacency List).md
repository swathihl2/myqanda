## Graph (Adjacency List)

A Graph is a collection of nodes (vertices) and edges (connections between nodes). Graphs are used to represent networks like social networks, transportation systems, and web pages.

Types of Graphs:
Directed Graph (DiGraph): Edges have a direction (e.g., one-way streets).
Undirected Graph: Edges have no direction (e.g., friendship relationships).
Weighted Graph: Edges have weights (e.g., travel cost, distance).
Example: Graph using Adjacency List


```python

class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, u, v):
        if u not in self.graph:
            self.graph[u] = []
        self.graph[u].append(v)

    def display(self):
        for vertex in self.graph:
            print(f"{vertex}: {self.graph[vertex]}")

# Create a graph and add edges
g = Graph()
g.add_edge("A", "B")
g.add_edge("A", "C")
g.add_edge("B", "D")
g.add_edge("C", "D")

# Display the graph
g.display()
# Output:
# A: ['B', 'C']
# B: ['D']
# C: ['D']

```

Explanation:

The graph is represented using an adjacency list, where each node points to a list of its neighbors.
The add_edge() method adds an edge between two vertices u and v.
Graphs are used in tasks like finding the shortest path, social network analysis, and recommendation systems.
