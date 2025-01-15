# 1) Explain the key steps involved in upgrading Ruby engines to 3.3.

# 2) Explain how you implemented the auto-save functionality in PowerChart.

The ask from the customer was when the application loads freshly first time it should fecthing the previously stored data and it should be saved automatically very that moment.
after the every change on that documented will going to add to changed state and for every 5 seconds it will be saved. so to get this feature whether the feature is enabled or not, I took an advantage of settings api which will give the inforamtion about the users flag and I stored all those required flags into our cahce. when the user visit again or refresh the page the settings will be pulled form the cache so it avoided unnecessory call of API's and I introduced one more lock flag which make ensure the save functionality will be won't get conflicted.




# 3) For your speech emotion detection project, how did you handle audio preprocessing?


# 4) How do you optimize loops and database interactions in a Ruby application?


