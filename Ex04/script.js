//Desenvolva um algoritmo que declare uma lista de 10 números e
//solicite um número para o usuário e no final informe se o número
//que o usuário digitou está dentro da lista ou não.

const lista = [1, 7, 2, 0, 5, 4, 12, 18, 30, 9];
const numUsuario = prompt("Digite um número:");

let encontrado = false;
for (let i = 0; i < lista.length; i++) {
    if (parseInt(numUsuario) === lista[i]) {
        encontrado = true;
        break;
    }
}
if (encontrado) {
    console.log(`O número ${numUsuario} está na lista.`);
} else {
    console.log(`O número ${numUsuario} não está na lista.`);
}