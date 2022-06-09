var input = '30\n'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (years, mounts, days) => {
  return `${years} ano(s)\n${mounts} mes(es)\n${days} dia(s)`
}

const ageConversion = (lines) => {
  const time = Number(lines.filter(Boolean))
  const years = Math.floor(time / 365)
  const resto = time % 365
  const mounts = Math.floor(resto / 30)
  const days = resto % 30
  answer = formatAnswer(years, mounts, days)
  return answer
}

console.log(ageConversion(lines))
