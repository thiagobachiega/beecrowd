//var input = '5\n6\n7\n8'
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer) => {
  return `DIFERENCA = ${unformatedAnswer}`
}

const averageGrade = (lines) => {
  const [A, B, C, D] = lines.map(Number)
  const unformatedAnswer = ((A * B) - (C * D))
  answer = formatAnswer(unformatedAnswer)
  return answer
}

console.log(averageGrade(lines))
