/*
  Regras:
  - A sequência deve ter 7 caracteres (Entrada);
  - Pegar o último bit de cada caractere;
  - Forma uma sequência binária com os estes bits;
  - Converter a sequência binária para decimal;
  - O número decimal obtido será o dígito verificador.
*/

const binToDec = (bin) => parseInt(bin, 2).toString(10);
const decToBin = (dec) => parseInt(dec, 10).toString(2);

const getLastBit = (decimal) => decimal % 2;
const getBinarySequence = (seq) => {
	const sequence = seq.split("");
	// Formando um array com o último bit de cada termo da sequência recebida no parametro "seq"
	const binaries = sequence.map((dec) => getLastBit(Number(dec))).join("");
	return binaries;
};
const getHashCode = (seq) => binToDec(getBinarySequence(seq));

const generateSequenceByHash = (hash) => {
	const hashBinaries = decToBin(hash).padStart(7, 0).split("");
	let possibleSequence = "";

	// Para cada bit presente no array, gero um algarismo aleatório de igual paridade (0 = par, 1 = ímpar)
	hashBinaries.forEach((digit) => {
		let randomNum = Math.ceil(Math.random() * 9);
		while (randomNum % 2 !== Number(digit)) {
			randomNum = Math.ceil(Math.random() * 9);
		}
		possibleSequence += randomNum;
	});

	return `${possibleSequence}-${hash}`;
};

const verifySequence = (sequence) => {
	const [numericSequence, hashCode] = sequence.split("-");
	const expectedHash = getHashCode(numericSequence);
	if (hashCode === expectedHash) return true;
	return false;
};
