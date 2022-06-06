const input = ["25","100","5.50"]

const NUMBER = input[0]
const HOURS = input[1]
const PRICEPERHOUR = input[2]

const SALARY = (Number(HOURS) * Number(PRICEPERHOUR)).toFixed(2)

console.log('NUMBER = ' + NUMBER)
console.log('SALARY = U$' + SALARY)