## Method Resolution Order (MRO)

Method Resolution Order (MRO) determines the order in which classes are inherited when multiple inheritance is involved.

    class A:
        def speak(self):
            print("Class A")
    
    class B(A):
        def speak(self):
            print("Class B")
    
    class C(A):
        def speak(self):
            print("Class C")
    
    class D(B, C):
        pass
    
    d = D()
    d.speak()  # Output: Class B (According to MRO, B is called before C)
