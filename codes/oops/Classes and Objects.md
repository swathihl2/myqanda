## Classes and Objects

Class: A blueprint for creating objects (a particular data structure), providing initial values for state (member variables or properties), and implementations of behavior (member functions or methods).

Object: An instance of a class. Objects hold the state and behaviors defined in the class.

```python
class Car:
    def __init__(self, make, model, year):
        self.make = make  # Attribute
        self.model = model  # Attribute
        self.year = year  # Attribute

    def start_engine(self):  # Method
        print(f"{self.make} {self.model} engine started.")

# Creating an object (instance) of the Car class
my_car = Car("Toyota", "Camry", 2022)
my_car.start_engine()  # Calling method
