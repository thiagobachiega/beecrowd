var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = Number(lines[0])

const formatAnswer = (unformatedAnswer, number) => {
  return `SALARY = U$ ${unformatedAnswer.toFixed(2)}`
}

const salary = (lines) => {
  const [number, hours, pricePerHour] = lines.map(Number)
  const unformatedAnswer = hours * pricePerHour
  answer = formatAnswer(unformatedAnswer, number)
  return answer
}

console.log(`NUMBER = ${number}`)
console.log(salary(lines))
