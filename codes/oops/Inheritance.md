## Inheritance

Inheritance allows a new class (child class) to inherit attributes and methods from an existing class (parent class). This promotes code reusability.

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass  # Placeholder method for subclasses

class Dog(Animal):  # Dog is a subclass of Animal
    def speak(self):
        print(f"{self.name} says Woof!")

class Cat(Animal):  # Cat is a subclass of Animal
    def speak(self):
        print(f"{self.name} says Meow!")

# Creating objects of Dog and Cat
dog = Dog("Buddy")
cat = Cat("Whiskers")

dog.speak()  # Output: Buddy says Woof!
cat.speak()  # Output: Whiskers says Meow!
