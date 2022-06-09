var input = '576\n'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const value = Number(lines[0]);
const bankNotes = [100, 50, 20, 10, 5, 2, 1];

const toCents = (value) => {
  return Number(value.toFixed(2).replace(".", ""))
}
const toCurrency = (value) => value / 100
const processCurrency = (value, currency) => {
  const valueAsCents = toCents(value)
  const currencyAsCents = toCents(currency)
  const amount = Math.floor(valueAsCents / currencyAsCents)
  const remaining = toCurrency(valueAsCents % currencyAsCents);
  return {value, currency, amount, remaining}
}

const answer = bankNotes.reduce((acc, currency, index) => {
  const remaining = acc[index -1]?.remaining || value
  const processedCurrency = processCurrency(remaining, currency); 
  acc.push(processedCurrency);
  return acc;
}, [])

const formatAnswer = (answer) => {
    console.log(answer[0].value)
  answer.forEach((notes) => {
    return console.log(`${notes.amount} nota(s) de ${notes.currency.toFixed(2).replace('.',',')}`)
  })
}

formatAnswer(answer)
