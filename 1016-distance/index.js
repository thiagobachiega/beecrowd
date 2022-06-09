var input = '30'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer, prefix) => {
  return `${unformatedAnswer} ${prefix}`
}

const fuelSpent = (lines) => {
  distance = Number(lines.filter(Boolean))
  const distanceBetweenCars = distance * 2 
  answer = formatAnswer(distanceBetweenCars, 'minutos')
  return answer
}

console.log(fuelSpent(lines))
