## Heap

A Heap is a special tree-based data structure that satisfies the heap property:

Min-Heap: The parent node is less than or equal to its children.
Max-Heap: The parent node is greater than or equal to its children.
Heaps are often used in priority queues, heapsort, and algorithms like Dijkstra's shortest path.

Example: Min-Heap using heapq

```python

import heapq

class MinHeap:
    def __init__(self):
        self.heap = []

    def push(self, item):
        heapq.heappush(self.heap, item)  # Adds item to the heap

    def pop(self):
        if self.heap:
            return heapq.heappop(self.heap)  # Removes and returns the smallest item
        else:
            return "Heap is empty"

    def peek(self):
        if self.heap:
            return self.heap[0]  # Returns the smallest item without removing it
        else:
            return "Heap is empty"

# Create a MinHeap and perform operations
min_heap = MinHeap()
min_heap.push(10)
min_heap.push(20)
min_heap.push(5)

print(min_heap.pop())  # Output: 5 (smallest element)
print(min_heap.peek()) # Output: 10 (next smallest element)

```
Explanation:

The heapq module in Python provides a simple way to implement a heap. It maintains a min-heap by default, where the smallest element is at the root.
The heappush() function adds an element, and heappop() removes and returns the smallest element.
Heaps are efficient for priority queues and problems like sorting and pathfinding.
