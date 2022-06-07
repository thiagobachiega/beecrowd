var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer) => {
  return `MEDIA = ${unformatedAnswer.toFixed(5)}`
}

const averageGrade = (lines) => {
  console.log(lines)
  const numberOne = Number(lines[0])
  const numberTwo = Number(lines[1])
  const unformatedAnswer = (numberOne + numberTwo) / lines.length
  console.log(lines)
  console.log(lines.length)
  answer = formatAnswer(unformatedAnswer)
  return answer
}

console.log(averageGrade(lines))
