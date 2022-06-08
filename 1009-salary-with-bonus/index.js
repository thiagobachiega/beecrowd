var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer) => {
  return `TOTAL = R$ ${unformatedAnswer.toFixed(2)}`
}

const salaryWithBonus = (lines) => {
  const [name, fixedSalary, totalSales] = lines.map(Number)
  const unformatedAnswer = (totalSales * 0.15) + fixedSalary
  answer = formatAnswer(unformatedAnswer)
  return answer
}

console.log(salaryWithBonus(lines))
