const input = "576.73\n";
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split("\n");

var value = Number(lines[0]);
const bankNotes = [100, 50, 20, 10, 5, 2];
const coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

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

const convertCurrency = (notesOrCoins) =>{
  const answer = notesOrCoins.reduce((acc, currency, index) => {
    const remaining = acc[index -1]?.remaining || value
    const processedCurrency = processCurrency(remaining, currency); 
    acc.push(processedCurrency);
    return acc;
  }, [])
  return answer
}

const formatAnswer = (answer, prefix) => {
  console.log(`${prefix.toUpperCase()}S:`)
answer.forEach((notes) => {
  return console.log(`${notes.amount} ${prefix}(s) de ${notes.currency.toFixed(2).replace('.',',')}`)
})
}

formatAnswer(convertCurrency(bankNotes),'nota')
formatAnswer(convertCurrency(coins),'moeda')
