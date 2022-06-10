var input = '13 2 15.30\n161 4 5.20'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer) => {
  return `VALOR A PAGAR: R$ ${unformatedAnswer.toFixed(2)}`
}

const pricePerProduct = (line) => {
  const price = line[1] * line[2]
  return price
}

const simpleCalculate = (lines) => {
  const [price1, price2] = lines.map((line) => {return pricePerProduct(line.split(' '))})
  const totalPrice = price1 + price2
  answer = formatAnswer(totalPrice)
  return answer
}

console.log(simpleCalculate(lines))
