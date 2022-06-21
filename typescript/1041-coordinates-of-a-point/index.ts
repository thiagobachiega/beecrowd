var input = '6.0 6.0\n'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines: string[] = input.split('\n');


export const formatEntry = (lines: string[]) => {
  return lines.filter(Boolean).join('').split(' ').map(Number)
}

const calcQuadrant = (x: number, y: number) => {
  if (x > 0 && y > 0){
    return 'Q1'
  }
  if (x < 0 && y < 0){
    return 'Q3'
  }
  if (x > 0 && y < 0){
    return 'Q4'
  }
  if (x < 0 && y > 0){
    return 'Q2'
  }
  if (x > 0 && y === 0){
    return 'Eixo X'
  }
  if (x === 0 && y > 0){
    return 'Eixo Y'
  } else {
    return 'Origem'
  }
}

const coordinatesOfAPoint = (lines: string[]) => {
  const [x, y] = formatEntry(lines)
  const quadrant = calcQuadrant(x, y)
  return quadrant
}

console.log(coordinatesOfAPoint(lines))
