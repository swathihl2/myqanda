### 6. Trie (Prefix Tree)

A **Trie** is a special tree-like data structure used to store strings. It is used in problems related to autocomplete, prefix matching, and dictionary implementations.

#### Example: Trie Implementation

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word

    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True

# Create a Trie and perform operations
trie = Trie()
trie.insert("hello")
trie.insert("hell")
trie.insert("he")

print(trie.search("hello"))  # Output: True

```

Explanation:

A Trie (or Prefix Tree) is a tree-based data structure that stores a set of strings, where each node represents a common prefix of the strings.
The insert() method adds a word, search() checks if a word exists in the trie, and starts_with() checks if there is any word with a given prefix.
Tries are efficient for searching and prefix matching in dictionaries or autocomplete systems.
print(trie.search("hell"))   # Output: True
print(trie.search("he"))     # Output: True
print(trie.search("hero"))   # Output: False
print(trie.starts_with("he"))  # Output: True
