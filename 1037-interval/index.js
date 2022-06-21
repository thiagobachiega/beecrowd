var input = '-25.02\n'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (result) => {
  return `${result}`
}

const calcInterval = (number) => {
  if (number >= 0 && number <= 25){
    return 'Intervalo [0,25]'
  } 
  if (number >= 25 && number <= 50){
  return 'Intervalo (25,50]'
  }
  if (number >= 50 && number <= 75){
    return 'Intervalo (50,75]'
  }
  if (number >= 75 && number <= 100){
    return 'Intervalo (75,100]'
  } else {
    return 'Fora de intervalo'
  }
}

const bhaskaraFormulaBeecrowd = (lines) => {
  const number = Number(lines.filter(Boolean).join(''))
  const response = calcInterval(number)
  return formatAnswer(response)
}

console.log(bhaskaraFormulaBeecrowd(lines))
