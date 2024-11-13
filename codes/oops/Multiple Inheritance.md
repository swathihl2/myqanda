## Multiple Inheritance

Multiple inheritance allows a class to inherit from more than one parent class. In Python, this is supported directly.


```python
class Vehicle:
    def __init__(self, brand):
        self.brand = brand

class Engine:
    def __init__(self, horsepower):
        self.horsepower = horsepower

class Car(Vehicle, Engine):
    def __init__(self, brand, horsepower, model):
        Vehicle.__init__(self, brand)
        Engine.__init__(self, horsepower)
        self.model = model

    def display_info(self):
        print(f"{self.brand} {self.model} with {self.horsepower} HP")

# Creating an object of Car
my_car = Car("Tesla", 500, "Model S")
my_car.display_info()  # Output: Tesla Model S with 500 HP
