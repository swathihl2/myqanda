## Hash Map (Dictionary)

A Hash Map (or hash table) is a data structure that maps keys to values. It provides efficient key-value pair lookups, insertions, and deletions. Hash maps are widely used for implementing associative arrays, caches, and sets.

Example: Hash Map using Python's dict

```python

# Creating a hash map (dictionary)
hash_map = {}

# Adding key-value pairs
hash_map["apple"] = 3
hash_map["banana"] = 5
hash_map["cherry"] = 2

# Accessing values by keys
print(hash_map["apple"])   # Output: 3
print(hash_map["banana"])  # Output: 5

# Updating values
hash_map["banana"] = 7
print(hash_map["banana"])  # Output: 7

# Deleting a key-value pair
del hash_map["cherry"]

# Check if a key exists
print("apple" in hash_map)  # Output: True
print("cherry" in hash_map) # Output: False



```

Explanation:

Python's built-in dict type implements a hash map where each key is hashed to an index, allowing fast access to values.
The hash map is highly efficient for storing and retrieving key-value pairs.
Hash maps are essential for tasks like counting frequencies, implementing caches, and mapping relationships between objects.

