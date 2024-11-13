## Parallelism in Python


Example: Using multiprocessing Module (Parallelism)
The multiprocessing module allows for the creation of processes, which can run in parallel across different CPU cores. Each process has its own Python interpreter and memory space, so they can truly execute simultaneously on multiple cores.

Parallelism Example with multiprocessing:

    import multiprocessing
    import time
    
    def task1():
        print("Task 1 started")
        time.sleep(2)
        print("Task 1 finished")
    
    def task2():
        print("Task 2 started")
        time.sleep(1)
        print("Task 2 finished")
    
    if __name__ == "__main__":
        # Create processes for task1 and task2
        process1 = multiprocessing.Process(target=task1)
        process2 = multiprocessing.Process(target=task2)
    
        # Start the processes
        process1.start()
        process2.start()
    
        # Wait for both processes to finish
        process1.join()
        process2.join()
    
        print("Both tasks are completed.")



Explanation:

multiprocessing.Process creates a new process for each task.
The start() method starts the process in parallel.
The join() method blocks the main thread until the process completes.
Since each process runs in its own Python interpreter and has its own memory space, the tasks can run truly in parallel on multiple CPU cores.

Advantages of Parallelism:
True parallelism is achieved because multiple processes can run simultaneously on separate cores.
Python can overcome the GIL limitation because each process has its own independent interpreter and memory space.
