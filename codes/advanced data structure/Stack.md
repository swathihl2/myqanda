## Stack

A Stack is a Last In First Out (LIFO) data structure. It allows adding and removing elements from one end (the top). Stacks are used in function call management, undo mechanisms, and depth-first search.

Example: Stack using List


```python
class Stack:
    def __init__(self):
        self.stack = []  # Use a list to implement the stack

    def push(self, item):
        self.stack.append(item)  # Adds item to the top of the stack

    def pop(self):
        if not self.is_empty():
            return self.stack.pop()  # Removes and returns the top item
        else:
            return "Stack is empty"

    def peek(self):
        if not self.is_empty():
            return self.stack[-1]  # Returns the top item without removing
        else:
            return "Stack is empty"

    def is_empty(self):
        return len(self.stack) == 0  # Checks if the stack is empty



# Create a stack and perform operations
s = Stack()
s.push(10)
s.push(20)
print(s.pop())  # Output: 20
print(s.peek())  # Output: 10
```


Explanation:

The stack is implemented using a Python list (stack).
push() adds an item to the stack, pop() removes and returns the item at the top, and peek() shows the top item without removing it.
Stacks are used in problems like balancing parentheses, parsing expressions, and more.



