var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (sum) => {
  return `SOMA = ${sum}`
}

const simpleSum = (lines) => {
  const numberOne = Number(lines[0])
  const numberTwo = Number(lines[1])
  const sum = numberOne + numberTwo
  answer = formatAnswer(sum)
  return answer
}

console.log(simpleSum(lines))
