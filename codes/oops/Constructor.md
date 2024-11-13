## Constructor (__init__ Method)

The __init__ method is a special method in Python classes. It is used to initialize objects of a class when they are created.


    class Person:
        def __init__(self, name, age):
            self.name = name
            self.age = age
    
        def greet(self):
            print(f"Hello, my name is {self.name} and I am {self.age} years old.")
    
    # Creating an object of Person
    p = Person("John", 30)
    p.greet()  # Output: Hello, my name is John and I am 30 years old.
