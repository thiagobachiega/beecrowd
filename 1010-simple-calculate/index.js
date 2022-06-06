const input = ["12","1","5.30","16","2","5.10"]

const VALOR = (Number(input[1]) * Number(input[2]) + Number(input[4]) * Number(input[5])).toFixed(2)

console.log('VALOR A PAGAR: R$' + VALOR)