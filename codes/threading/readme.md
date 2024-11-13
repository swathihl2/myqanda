


## Comparison Between Concurrency and Parallelism

| **Aspect**            | **Concurrency**                                      | **Parallelism**                                      |
|-----------------------|------------------------------------------------------|------------------------------------------------------|
| **Definition**        | Dealing with multiple tasks at once (time-sharing)   | Executing multiple tasks simultaneously (hardware parallelism) |
| **Execution Model**   | Tasks are interleaved on a single core               | Tasks run simultaneously on multiple cores           |
| **Use Case**          | I/O-bound tasks (file reading, network requests)     | CPU-bound tasks (mathematical calculations, data processing) |
| **Python Limitation** | GIL limits CPU-bound tasks (threads)                 | GIL is bypassed (multiple processes can run in parallel) |
| **Example**           | Threading (`threading` module)                       | Multiprocessing (`multiprocessing` module)           |
