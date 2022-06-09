var input = '140153\n'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (hours, minutes, seconds) => {
  return `${hours}:${minutes}:${seconds}`
}

const timeConversion = (lines) => {
  const time = Number(lines.filter(Boolean))
  const hours = Math.floor(time / 3600)
  const resto = time % 3600
  const minutes = Math.floor(resto / 60)
  const seconds = time % 60
  answer = formatAnswer(hours, minutes, seconds)
  return answer
}

console.log(timeConversion(lines))
