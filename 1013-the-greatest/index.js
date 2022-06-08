var input = '217\n14\n6'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (unformatedAnswer, prefix) => {
  return `${unformatedAnswer} ${prefix}`
}

const calcGreater = (A, B, C) => {
  const greater = (A + B + Math.abs(A - B)) / 2 
  const result = (greater + C + Math.abs(greater - C)) / 2
  return result
}

const theGreatest = (lines) => {
  const [A, B, C] = lines.filter(Boolean).map(Number)
  const greater = calcGreater(A, B, C) 
  answer = formatAnswer(greater, 'eh o maior')
  return answer
}

console.log(theGreatest(lines))
