## Polymorphism

Polymorphism means the ability to take many forms. In Python, it allows methods to be overridden in child classes or for objects of different classes to be treated as instances of the same class.


```python
class Shape:
def area(self):
    pass  # Base method that will be overridden

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2  # Circle area formula

class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width  # Rectangle area formula

# Polymorphism: Same method name, different implementation
shapes = [Circle(5), Rectangle(4, 6)]

for shape in shapes:
    print(f"Area: {shape.area()}")  # Different outputs based on the object type
