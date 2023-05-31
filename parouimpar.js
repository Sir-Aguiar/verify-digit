const isOdd = (num) => num % 2 === 0;

let num = Number(prompt("Insira um número"))
if (isOdd(num)) {
  alert("Este número é par")
}
else {
  alert("Este número é ímpar")
}