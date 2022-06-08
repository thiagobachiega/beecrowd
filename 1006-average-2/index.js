var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer) => {
  return `MEDIA = ${unformatedAnswer.toFixed(1)}`
}

const averageGrade = (lines) => {
  const [A, B, C] = lines.map(Number)
  const unformatedAnswer = ((A * 2) + (B * 3) + (C * 5)) / 10
  answer = formatAnswer(unformatedAnswer)
  return answer
}

console.log(averageGrade(lines))
