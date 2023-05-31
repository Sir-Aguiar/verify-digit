const contarPalavras = (frase) => {
  let palavras = String(frase).trim().split(" ")
  let numPalavras = palavras.length

  return {
    palavras,numPalavras
  }
}
