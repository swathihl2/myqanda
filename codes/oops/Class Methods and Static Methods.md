## Class Methods and Static Methods


Class Method: A method that is bound to the class and not the instance. It can modify the class state.
Static Method: A method that does not modify the class or instance state. It behaves like a regular function but belongs to the class's namespace.

```python
class Car:
    wheels = 4  # Class variable

    @classmethod
    def get_wheels(cls):
        return cls.wheels  # Accessing class variable

    @staticmethod
    def is_motorized():
        return True  # Static method to check if the car is motorized

# Accessing class method
print(Car.get_wheels())  # Output: 4

# Accessing static method
print(Car.is_motorized())  # Output: True

```
