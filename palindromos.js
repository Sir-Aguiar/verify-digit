// Palindromos são sentenças que ao serem lidas ao contrário são iguais
const isPalindrome = function (sample) {
  let handledString = String(sample).toLowerCase().replace(" ","")
  let stringArray = handledString.split("").join("")
  let reversedArray = handledString.split("").reverse().join("")
  
  if (stringArray == reversedArray) return console.log("Palindromo")
  return console.log("Não é palindromo")
}

isPalindrome(prompt("Insira uma palavra"))
