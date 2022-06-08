var input = '1.0 7.0\n5.0 9.0'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer) => {
  return `${unformatedAnswer.toFixed(4)}`
}

const distanceBetween = (lines) => {
  const [x1, y1] = lines[0].split(' ').map(Number)
  const [x2, y2] = lines[1].split(' ').map(Number)
  const distanceBetween =  Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))
  answer = formatAnswer(distanceBetween)
  return answer
}

console.log(distanceBetween(lines))
