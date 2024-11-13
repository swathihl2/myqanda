## Binary Tree


A Binary Tree is a hierarchical structure in which each node has at most two children (left and right). It is widely used in searching and sorting algorithms, such as binary search trees (BSTs), heaps, and balanced trees.

Example: Binary Search Tree (BST)
```python

class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.value = key

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, key):
        if self.root is None:
            self.root = Node(key)
        else:
            self._insert_recursive(self.root, key)

    def _insert_recursive(self, node, key):
        if key < node.value:
            if node.left is None:
                node.left = Node(key)
            else:
                self._insert_recursive(node.left, key)
        elif key > node.value:
            if node.right is None:
                node.right = Node(key)
            else:
                self._insert_recursive(node.right, key)

    def inorder_traversal(self, node):
        if node:
            self.inorder_traversal(node.left)
            print(node.value, end=" ")
            self.inorder_traversal(node.right)

# Create a BST and insert values
bst = BinarySearchTree()
bst.insert(10)
bst.insert(20)
bst.insert(5)
bst.insert(15)

# Display the tree using inorder traversal
bst.inorder_traversal(bst.root)  # Output: 5 10 15 20

```
Explanation:

A binary search tree (BST) is a type of binary tree where the left child node has a value smaller than the parent node and the right child node has a larger value.
The insert() method places values in the correct position, and the inorder_traversal() method prints the values in sorted order.
Binary trees are used in algorithms like binary search, AVL trees, and heap-based priority queues.
