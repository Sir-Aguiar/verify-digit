
/*
  Regras:
  - A sequência deve ter 7 caracteres (Entrada);
  - Pegar o último bit de cada caractere;
  - Forma uma sequência binária com os estes bits;
  - Converter a sequência binária para decimal;
  - O número decimal obtido será o dígito verificador.
*/

const getFirstBin = (decimal) => decimal % 2;

const getBinarySequence = (seq) => {
	const sequence = seq.split("");
	const binaries = sequence.map((dec) => getFirstBin(Number(dec))).join("");
	return binaries;
};

const binToDec = (bin) => parseInt(bin, 2).toString(10);

const getHashCode = (seq) => binToDec(getBinarySequence(seq));

const verifySequence = (sequence) => {
	const [numericSequence, hashCode] = sequence.split("-");
	const expectedHash = getHashCode(numericSequence);
	if (hashCode === expectedHash) return true;
	return false;
};