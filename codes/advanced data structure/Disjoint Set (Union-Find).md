## Disjoint Set (Union-Find)

A Disjoint Set (also known as Union-Find) is a data structure used to keep track of a partition of a set into disjoint subsets. It supports two operations:

Union: Merge two sets.
Find: Find the representative or root of a set.
Disjoint sets are used in algorithms like Kruskal's algorithm for finding the minimum spanning tree (MST) and in network connectivity problems.

Example: Union-Find Implementation
```python

class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))  # Each node is its own parent
        self.rank = [0] * n  # Used for balancing

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]

    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)

        if rootX != rootY:
            # Union by rank (balancing)
            if self.rank[rootX] > self.rank[rootY]:
                self.parent[rootY] = rootX
            elif self.rank[rootX] < self.rank[rootY]:
                self.parent[rootX] = rootY
            else:
                self.parent[rootY] = rootX
                self.rank[rootX] += 1

# Create a Union-Find structure with 5 elements
uf = UnionFind(5)

# Perform union operations
uf.union(0, 1)
uf.union(1, 2)
uf.union(3, 4)

# Check if two elements are connected
print(uf.find(0) == uf.find(2))  # Output: True
print(uf.find(0) == uf.find(3))  # Output: False

```

Explanation:

Each element initially points to itself, indicating that each element is its own set.
The find() method uses path compression to make future queries faster.
The union() method uses union by rank to keep the tree flat, improving the efficiency of the union operation.
Union-Find is highly efficient for problems involving dynamic connectivity and disjoint sets.
