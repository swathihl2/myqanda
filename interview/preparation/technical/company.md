# 1) Explain the key steps involved in upgrading Ruby engines to 3.3.

# 2) Explain how you implemented the auto-save functionality in PowerChart.

The requirement from the customer was that when the application loads for the first time, it should fetch the previously stored data and save it automatically at that moment. After every change to the document, the changes should be added to a "changed" state, and every 5 seconds, the changes would be saved. To implement this feature, I utilized the settings API to check whether the feature is enabled, and stored the relevant flags in our cache. This approach ensures that, on subsequent visits or page refreshes, the settings are pulled from the cache, avoiding unnecessary API calls. Additionally, I introduced a lock flag to ensure that the save functionality doesn’t get conflicted.




# 3) For your speech emotion detection project, how did you handle audio preprocessing?


For speech emotion detection, we implemented audio preprocessing techniques. When the user speaks, we use FFmpeg to capture the audio and store it in a unique pattern with a fixed sample rate and mono channel, ensuring the data remains stable in quality. After capturing the audio, we applied mel frame resizing to reduce noise and padded the data using a max pooling function. In the final stage of preprocessing, we flattened the data into a single 1D stream and passed it to the neural network for emotion detection.


# 4) How do you optimize loops and database interactions in a Ruby application?


