## Singleton

A Singleton is a design pattern that ensures a class has only one instance and provides a global point of access to that instance. In Python, a Singleton can be implemented in a few different ways. Here's a simple example using the __new__ method to ensure only one instance of the class is created:

Singleton Example in Python

```python
class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance

# Test the Singleton behavior
singleton1 = Singleton()
singleton2 = Singleton()

print(singleton1 is singleton2)  # Output: True
