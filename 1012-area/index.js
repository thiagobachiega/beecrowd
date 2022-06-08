var input = '3.0\n4.0\n5.2'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer, prefix) => {
  return `${prefix}: ${unformatedAnswer.toFixed(3)}`
}

const objectArea = (lines) => {
  const [A, B, C] = lines.filter(Boolean).map(Number)
  pi = 3.14159
  const calcTriangleArea = ((A * C) / 2)
  answer = formatAnswer(calcTriangleArea, 'TRIANGULO')
  return answer
}

console.log(objectArea(lines))
