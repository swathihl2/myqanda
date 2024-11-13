## Concurrency in Python

Example: Using threading Module (Concurrency)
The threading module is used to create threads in Python. Threads can run concurrently, meaning the program can switch between tasks quickly (context switching), but they don’t necessarily run in parallel.

    import threading
    import time
    
    def task1():
        print("Task 1 started")
        time.sleep(2)
        print("Task 1 finished")
    
    def task2():
        print("Task 2 started")
        time.sleep(1)
        print("Task 2 finished")
    
    # Create threads for task1 and task2
    thread1 = threading.Thread(target=task1)
    thread2 = threading.Thread(target=task2)
    
    # Start the threads
    thread1.start()
    thread2.start()
    
    # Wait for both threads to finish
    thread1.join()
    thread2.join()
    
    print("Both tasks are completed.")
