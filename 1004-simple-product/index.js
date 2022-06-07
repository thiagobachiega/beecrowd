var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (product) => {
  return `PROD = ${product}`
}

const simpleProduct = (lines) => {
  const numberOne = Number(lines[0])
  const numberTwo = Number(lines[1])
  const product = numberOne * numberTwo
  answer = formatAnswer(product)
  return answer
}

console.log(simpleProduct(lines))
