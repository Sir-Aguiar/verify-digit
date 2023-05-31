const IMC = (peso, altura) => {
  const imcValor = peso / (altura ** 2);
  console.log(`Seu IMC é ${imcValor.toFixed(2)}`)
  if (imcValor < 18.5) console.log("Abaixo do peso ideal")
  else if (imcValor < 25) console.log("Peso normal")
  else if (imcValor < 30) console.log("Excesso de peso")
  else console.log("Obesidade")
}

IMC(Number(prompt("Insira seu peso")), Number(prompt("Insira sua altura")))