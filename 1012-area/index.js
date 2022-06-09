var input = '12.7 10.4 15.2\n'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer, prefix) => {
  return `${prefix}: ${unformatedAnswer.toFixed(3)}`
}

const objectArea = (lines) => {
  const [A, B, C] = lines[0].split(" ").map(Number)
  pi = 3.14159
  const calcTriangleArea = ((A * C) / 2)
  const answerTriangle = formatAnswer(calcTriangleArea, 'TRIANGULO')
  const calcCircleArea = pi * (C * C)
  const answerCircle = formatAnswer(calcCircleArea, 'CIRCULO')
  const calcTrapeziumArea = (( A + B ) / 2) * C
  const answerTrapezium = formatAnswer(calcTrapeziumArea, 'TRAPEZIO')
  const calcSquareArea = B * B
  const answerSquare = formatAnswer(calcSquareArea, 'QUADRADO')
  const calcRetangleArea = A * B
  const answerRetangle = formatAnswer(calcRetangleArea, 'RETANGULO')
  return [answerTriangle, answerCircle, answerTrapezium, answerSquare, answerRetangle]
}

result = objectArea(lines)

console.log(`${result[0]}\n${result[1]}\n${result[2]}\n${result[3]}\n${result[4]}`)
