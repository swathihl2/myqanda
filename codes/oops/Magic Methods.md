## Magic Methods

Magic methods in Python (also called dunder methods) are special methods that allow customization of object behavior. Examples include __str__, __repr__, __add__, etc.


```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Point({self.x}, {self.y})"

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

# Creating two Point objects
p1 = Point(2, 3)
p2 = Point(4, 5)

print(p1)  # Output: Point(2, 3)
p3 = p1 + p2
print(p3)  # Output: Point(6, 8)
