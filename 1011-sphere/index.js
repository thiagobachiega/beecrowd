var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer) => {
  return `VOLUME = ${unformatedAnswer.toFixed(3)}`
}

const sphereRadius = (lines) => {
  const radius = Number(lines.filter(Boolean))
  pi = 3.14159
  const unformatedAnswer = 4.0 * pi * (radius * radius * radius) /3
  answer = formatAnswer(unformatedAnswer)
  return answer
}

console.log(sphereRadius(lines))
