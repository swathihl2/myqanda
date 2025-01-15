# 1) Explain the key steps involved in upgrading Ruby engines to 3.3.

# 2) Explain how you implemented the auto-save functionality in PowerChart.

The ask from the customer was when the application loads freshly it should be saved automatically and fecthing the previously stored data very that moment. 
so to get the feature is enabled or not I took a advantage of settings api which will give the inforamtion about the users flag and I stored all those required flags into our cahce. when the user visit again or refresh the page the settings will be pulled form the cache so it avoided unnecessory call of API's and I introduced one more lock flag which make ensure the save functionality will be won't get conflicted.




# 3) For your speech emotion detection project, how did you handle audio preprocessing?


# 4) How do you optimize loops and database interactions in a Ruby application?


