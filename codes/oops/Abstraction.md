## Abstraction

Abstraction involves hiding the complex implementation details and showing only the essential features of an object. In Python, abstraction is implemented using abstract base classes (ABC).

```python
    from abc import ABC, abstractmethod
    
    class Vehicle(ABC):
        @abstractmethod
        def start(self):
            pass
    
        @abstractmethod
        def stop(self):
            pass
    
    class Car(Vehicle):
        def start(self):
            print("Car engine started.")
    
        def stop(self):
            print("Car stopped.")
    
    class Bike(Vehicle):
        def start(self):
            print("Bike engine started.")
    
        def stop(self):
            print("Bike stopped.")
    
    # Creating objects of Car and Bike
    car = Car()
    bike = Bike()
    
    car.start()  # Output: Car engine started.
    bike.stop()  # Output: Bike stopped.


```
