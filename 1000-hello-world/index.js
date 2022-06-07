var sample = {
  input: 'Hello World!',
  output: 'Hello World!'
}

const check = (input, output) => {
 const aswer = input === output ? 'Correct' : 'Wrong'
 return console.log(aswer)
}

check(sample.input, sample.output)