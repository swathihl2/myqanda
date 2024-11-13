## Using asyncio for Concurrency

Python's asyncio module is another way to achieve concurrency, especially for I/O-bound tasks. With asyncio, you can run multiple tasks "concurrently" without creating threads or processes by using an event loop.


```python
import asyncio

async def task1():
    print("Task 1 started")
    await asyncio.sleep(2)  # Simulating I/O-bound operation
    print("Task 1 finished")

async def task2():
    print("Task 2 started")
    await asyncio.sleep(1)  # Simulating I/O-bound operation
    print("Task 2 finished")

async def main():
    # Run tasks concurrently using asyncio
    await asyncio.gather(task1(), task2())

# Run the main event loop
asyncio.run(main())
```

Explanation:

async def defines a coroutine, which is a function that can be paused and resumed later.
await is used to pause the coroutine until the awaited task (like asyncio.sleep()) is finished.
asyncio.gather() runs multiple coroutines concurrently.
asyncio.run() runs the event loop to execute the main() coroutine.
While asyncio achieves concurrency by allowing multiple tasks to run without blocking each other, it doesn’t run tasks in parallel. It is more efficient for I/O-bound operations where you are waiting for external resources, like database queries, API calls, or file I/O.
