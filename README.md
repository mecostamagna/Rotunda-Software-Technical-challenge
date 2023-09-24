# Technical Challenge

This repository contains solutions to the Rotunda Software technical challenge consisting of the following exercises:

1.  **Error Alarm Exercise**:

    In a web application environment, errors are logged to a text file. While sporadic errors are a norm, a surge in error frequency may indicate an issue that needs attention. The objective is to devise a system that sends an email notification when more than ten errors are recorded within a minute. The catch is to avoid spamming with notifications and limit it to a single email per minute, even if the error count exceeds the threshold multiple times within that period.

    - How to run:

      ```
      npm run error-alarm
      ```

2.  **URL Parser Exercise**:

    Web applications frequently work with URLs that follow a specific pattern, containing both constant and variable segments. This exercise focuses on extracting variable parts from a given URL based on a predefined format. The outcome is a structured representation (hash) of the variable elements present in the URL. For instance, given a URL pattern `/:version/api/:collection/:id` and an actual URL `/6/api/listings/3?sort=desc&limit=10`, the goal is to produce a hash that maps each variable segment to its value.

    - How to run:

      ```
      npm run url-parser
      ```

3.  **Zoo Exercise**:

    In this exercise, we model a virtual zoo, where various animal species exist. Every animal, regardless of its species, can communicate with a method called speak. However, the sound made by each species is unique. For instance, a lion would intersperse its statement with the sound `"roar"`, while a tiger might use `"grrr"`. The challenge is to structure the code to efficiently model these animals and their behaviors.

    - How to run:

      ```
      npm run zoo
      ```
