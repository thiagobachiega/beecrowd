var input = '500\n35.0'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer, prefix) => {
  return `${unformatedAnswer.toFixed(3)} ${prefix}`
}

const fuelConsumption = (lines) => {
  const [KM, liters] = lines.filter(Boolean).map(Number)
  const comsumptionPerLiter =  KM / liters
  answer = formatAnswer(comsumptionPerLiter, 'km/l')
  return answer
}

console.log(fuelConsumption(lines))
