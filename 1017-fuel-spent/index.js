var input = '10\n85'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer) => {
  return `${unformatedAnswer.toFixed(3)}`
}

const fuelSpent = (lines) => {
  const [hours, kmh] = lines.filter(Boolean).map(Number)
  const literPerKmh = 12
  const fuelSpent = hours * kmh / literPerKmh
  answer = formatAnswer(fuelSpent)
  return answer
}

console.log(fuelSpent(lines))
