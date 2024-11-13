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


Explanation:

threading.Thread creates a thread to execute a function in parallel.
The start() method initiates the threads.
The join() method blocks the main thread until the threads complete their tasks.
Here, tasks are run concurrently, meaning the Python interpreter switches between the tasks (due to the sleep calls), but they still share the same CPU core.

Limitations of Concurrency (with Threads):
Python’s Global Interpreter Lock (GIL) prevents multiple threads from executing Python bytecode at the same time in a single process (especially CPU-bound tasks). Threads in Python are ideal for I/O-bound tasks, where waiting on I/O (like file or network operations) allows other threads to run.
