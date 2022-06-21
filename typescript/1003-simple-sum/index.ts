//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

type typeformatAns = (sum: number) => string


const formatAns: typeformatAns = (sum: number) => {
  return `SOMA = ${sum}`
}

export const simpleSum = (lines: string[]) => {
  const numberOne = Number(lines[0])
  const numberTwo = Number(lines[1])
  const sum = numberOne + numberTwo
  const answer = formatAns(sum)
  return answer
}

console.log(simpleSum(lines))
