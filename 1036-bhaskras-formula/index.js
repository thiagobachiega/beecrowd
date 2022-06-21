var input = '10.3 203.0 5.0\n'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (result, prefix) => {
  return `${prefix} = ${result.toFixed(5)}`
}

const calcBhaskara = (A, B, C) => {
  delta = (B * B) - (4 * A * C)
  if ( delta > 0 ) { 
    R1 = (-B + Math.sqrt(delta)) / (2 * A)
    R2 = (-B - Math.sqrt(delta)) / (2 * A)
    if (!R1){
      return 'Impossivel calcular'
    } else {
      return [R1,R2]
    }
  } else {
    return 'Impossivel calcular'
  }
}

const bhaskaraFormula = (lines) => {
  const [A,B,C] = lines.filter(Boolean).join('').split(' ').map(Number)
  const results = calcBhaskara(A, B, C)
  if (results === 'Impossivel calcular') {
    return console.log('Impossivel calcular')
  } else {
    const ans1 = formatAnswer(results[0],'R1')
    const ans2 = formatAnswer(results[1],'R2')
  return [ans1, ans2].map((ans) => {console.log(ans)})
  }
}

bhaskaraFormula(lines)
