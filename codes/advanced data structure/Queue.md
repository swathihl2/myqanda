## Queue


A Queue is a First In First Out (FIFO) data structure. It allows elements to be added at the rear and removed from the front. Queues are useful in scheduling algorithms, breadth-first search (BFS), and handling asynchronous data.


Example: Queue using deque

```python

from collections import deque

class Queue:
    def __init__(self):
        self.queue = deque()  # Use deque for efficient appending and popping

    def enqueue(self, item):
        self.queue.append(item)  # Adds item to the rear of the queue

    def dequeue(self):
        if not self.is_empty():
            return self.queue.popleft()  # Removes and returns item from the front
        else:
            return "Queue is empty"

    def peek(self):
        if not self.is_empty():
            return self.queue[0]  # Returns the item at the front without removing it
        else:
            return "Queue is empty"

    def is_empty(self):
        return len(self.queue) == 0  # Checks if the queue is empty

# Create a queue and perform operations
q = Queue()
q.enqueue(10)
q.enqueue(20)
print(q.dequeue())  # Output: 10
print(q.peek())     # Output: 20

```
Explanation:

A deque (double-ended queue) is used from the collections module to implement a queue. It allows efficient removal of elements from both ends.
enqueue() adds elements to the queue, dequeue() removes elements, and peek() returns the front element without removing it.
Queues are commonly used for managing tasks in scheduling and BFS traversal.
