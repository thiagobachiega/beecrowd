var input = '4 3\n'
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (result) => {
  return `Total: R$ ${result.toFixed(2)}`
}

const checkItemList = (code, amount) => {
  const itemList = [
    {code: 1, specification: 'Cachorro Quente', price:4.00},
    {code: 2, specification: 'X-Salada', price:4.50},
    {code: 3, specification: 'X-Bacon', price:5.00},
    {code: 4, specification: 'Torrada Simples', price:2.00},
    {code: 5, specification: 'Refrigerante', price:1.50},
  ]

  const selectedItem = itemList.find((element) => {
    return element.code === code 
  })
  return(amount * selectedItem.price)
}

const totalPrice = (lines) => {
  const [code, amount] = lines.filter(Boolean).join('').split(' ').map(Number)
  const answer = checkItemList(code, amount)
  const formatedAnswer = formatAnswer(answer)
  return formatedAnswer
}

console.log(totalPrice(lines))
