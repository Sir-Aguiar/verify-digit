let preco = Number(prompt("Preço do produto"))
let desconto = Number(prompt("Porcentagem de desconto"))
let precoFinal = preco - (preco * (desconto / 100))

alert("O preço final é "+ precoFinal)