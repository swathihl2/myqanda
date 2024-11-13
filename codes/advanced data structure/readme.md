# Advanced Data Structures in Python: Examples and Explanation

In addition to basic data structures like lists, tuples, sets, and dictionaries, Python also supports more advanced data structures that are useful in solving complex problems efficiently. These structures are typically found in algorithmic challenges, system design, and optimization tasks. Below are some advanced data structures along with explanations and Python code examples:

---

### 1. Linked List

A **Linked List** is a linear data structure where each element (node) points to the next element in the sequence. Linked lists are used to implement other data structures like stacks, queues, and graphs.

#### Types of Linked Lists:
- **Singly Linked List**: Each node has a reference to the next node.
- **Doubly Linked List**: Each node has references to both the next and previous nodes.
- **Circular Linked List**: The last node points back to the first node.

#### Example: Singly Linked List

```python
class Node:
    def __init__(self, data):
        self.data = data  # Data in the node
        self.next = None  # Pointer to the next node

class LinkedList:
    def __init__(self):
        self.head = None  # Initially, the list is empty

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Create a linked list and append values
ll = LinkedList()
ll.append(10)
ll.append(20)
ll.append(30)

# Display the linked list
ll.display()  # Output: 10 -> 20 -> 30 -> None
