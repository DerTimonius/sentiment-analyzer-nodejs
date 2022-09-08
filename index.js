import vader from 'vader-sentiment';

let input = 'I am super happy today';
if (process.argv.length > 2) {
  input = process.argv.slice(2).join(' ');
}
const result = vader.SentimentIntensityAnalyzer.polarity_scores(input);

function isPositive() {
  if (result.compound >= 0.05) {
    return 'positive';
  } else if (result.compound <= -0.05) {
    return 'negative';
  } else {
    return 'neutral';
  }
}
const output = `Your text has the following sentiment:

    - Positive: ${(result.pos * 100).toFixed(2)}%
    - Negative: ${(result.neg * 100).toFixed(2)}%
    - Neutral: ${(result.neu * 100).toFixed(2)}%

  So your overall sentiment was ${isPositive()}`;
console.log(output);
