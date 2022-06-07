var samples = [{
  input: ["10","9"],
  output: 'X = 19'
},
{
  input: ["10","9"],
  output: 'X = 19'
}
]
  


const result = (samples) => {
  return samples.map((sample) => {
    console.log(sample.input)
  })
}

result(samples)

const check = (result, output) => {
 const answer = result === output ? 'Correct' : 'Wrong'
 return console.log(answer)
}

check(result, samples.output)