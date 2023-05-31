/*
  Regras:
  - A sequência deve ter 7 caracteres (Entrada);
  - Pegar o primeiro bit de cada caractere;
  - Forma uma sequência binária com os primeiros bits;
  - Converter a sequência binária para decimal;
  - O número decimal obtido será o dígito verificador.
*/

const getFirstBin = (decimal) => decimal % 2

const getBinarySequence = (num) => {
  let arrSequencia = num.toString().split("")
  let binaries = arrSequencia.map(dec => getFirstBin(Number(dec))).join("")
  return binaries
}
const getDecimalDigit = (bin) => parseInt(bin, 2).toString(10)
let fullSeq = "1836781-85"

let sequencia = fullSeq.split("-")[0]
let binSequencia = getBinarySequence(sequencia)
let verDigit = getDecimalDigit(binSequencia.toString())

