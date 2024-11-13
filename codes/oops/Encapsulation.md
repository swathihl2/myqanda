## Encapsulation

Encapsulation is the concept of restricting access to some of an object's components and only exposing a controlled interface. This can be done using public and private attributes and methods.

Public members are accessible from outside the class.
Private members are hidden and cannot be accessed directly from outside the class.

```python
    class BankAccount:
        def __init__(self, owner, balance):
            self.owner = owner  # Public attribute
            self.__balance = balance  # Private attribute (indicated by double underscore)
    
        def deposit(self, amount):
            if amount > 0:
                self.__balance += amount
            else:
                print("Deposit amount must be positive.")
    
        def get_balance(self):  # Public method to access private attribute
            return self.__balance
    
    # Creating an object of BankAccount
    account = BankAccount("Alice", 1000)
    account.deposit(500)  # Deposit method
    print(account.get_balance())  # Accessing private balance through public method
