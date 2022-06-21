var input = '2.0 4.0 7.5 8.0 6.4\n'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatEntry = (lines) => {
  return lines.filter(Boolean).join('').split(' ').map(Number)
}

const formatAnswer = (answer) => {
  if ( answer.studentStatus === 'Aluno em exame.') {
    return console.log(`Media: ${answer.average.toFixed(1)}`),
    console.log(`${answer.studentStatus}`),
    console.log(`Nota do exame: ${answer.finalStatus.examScore}`),
    console.log(`${answer.finalStatus.finalStatus}`),
    console.log(`Media final: ${answer.finalStatus.finalAverage}`)
  } else 
  {
    return console.log(`Media: ${answer.average.toFixed(1)}`),
           console.log(`${answer.studentStatus}`)
  }

}

const calcMedia = (average) => {
  if (average >= 7){
    return 'Aluno aprovado.'
  }
  if (average < 5){
    return 'Aluno reporvado.'
  } else
    return 'Aluno em exame.'
}

const studentExam = (average, n5) => {
  const examScore = n5
  const finalAverage = (average + n5) / 2
    if (finalAverage >= 5){
      return {examScore, finalStatus: 'Aluno aprovado.', finalAverage}
    } else {
      return {examScore, finalStatus: 'Aluno reprovado.', finalAverage}
    }
}


const average = (lines) => {
  const [n1, n2, n3, n4, n5] = formatEntry(lines)
  const average = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10
  const studentStatus = calcMedia(average)
    if (studentStatus === 'Aluno em exame.') {
      const finalStatus = studentExam(average, n5)
      return formatAnswer({average, studentStatus, finalStatus})
    } else{
      return formatAnswer({average, studentStatus})
    }
}

average(lines)
