var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer) => {
  return `MEDIA = ${unformatedAnswer.toFixed(5)}`
}

const averageGrade = (lines) => {
  const [A, B] = lines.map(Number)
  const unformatedAnswer = ((A * 3.5) + (B * 7.5)) / 11
  answer = formatAnswer(unformatedAnswer)
  return answer
}

console.log(averageGrade(lines))
