var input = '2 3 -2 6\n'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (years, mounts, days) => {
  return `${years} ano(s)\n${mounts} mes(es)\n${days} dia(s)`
}

const isGreater = (num1, num2) => {
  if (num1 > num2) {
    return true
  } else {
    return false
  }
}

const sum = (num1, num2) => {
  return num1 + num2
}

const isPositive = (num1, num2) => {
  if (num1 && num2 || num1 > 0){
    return true
  } else {
    return false
  }
  
}

const selectionTest = (lines) => {
  const [A,B,C,D] = lines.filter(Boolean).join('').split(' ').map(Number)
  if (isGreater(B, C)){
    if (isGreater(D, A)) {
      if (sum(C, D) > sum(A, B)) {
        if (isPositive(C, D)){
          if (isPositive(A)){
            return 'Valores aceitos'
          }
          return 'Valores nao aceitos'
        }
        return 'Valores nao aceitos'
      }
      return 'Valores nao aceitos'
    }
    return 'Valores nao aceitos'
  }
  return 'Valores nao aceitos'
}

console.log(selectionTest(lines))
