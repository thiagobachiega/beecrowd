var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159;

const formatAnswer = (circleArea) => {
  return `A=${circleArea.toFixed(4)}`;
};

const calcCirclesAreas = (lines) => {
  const radius = Number(lines[0]);
  const circleArea = radius * radius * PI;
  answer = formatAnswer(circleArea);
  return answer;
};

console.log(calcCirclesAreas(lines));
