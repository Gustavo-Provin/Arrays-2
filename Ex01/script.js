//Desenvolva um algoritmo para percorrer um vetor de 15 elementos
//inteiros já preenchido e imprima todos os valores pares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log("Valores pares do vetor:");

for (let n = 0; n < numeros.length; n++) {
    if (numeros[n] % 2 === 0) {
        console.log(numeros[n]);
    }
}