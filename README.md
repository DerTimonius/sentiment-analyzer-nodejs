# sentiment-analyzer-nodejs

This application can analyze the sentiment of the user input provided in the command line.
```bash
node index.js today I am happy 
Your text has the following sentiment:

    - Positive: 64.90%
    - Negative: 0.00%
    - Neutral: 35.10%

  So your overall sentiment was positive
```
The output will show, if the input was more positive than negative and also show the percentage of positive, negative or neutral words.

```bash
node index.js today I am tired
Your text has the following sentiment:

    - Positive: 0.00%
    - Negative: 59.20%
    - Neutral: 40.80%

  So your overall sentiment was negative
  ```
  If no input is provided, a default text ("I am super happy today") will be analyzed.
  
  
  ### Edge Case
  If the user wants to input something with an apostrophe, putting the whole input in quotation marks is highly recommended", otherwise the application won't run correctly.
  
  ```bash
  node index.js "it isn't that easy as it may seem"
Your text has the following sentiment:

    - Positive: 0.00%
    - Negative: 25.60%
    - Neutral: 74.40%

  So your overall sentiment was negative
  ```
