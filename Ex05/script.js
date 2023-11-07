//Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
//e que exiba a lista desses nomes na tela. Após exibir essa lista, o
//programa deve mostrar também os nomes na ordem inversa em
//que o usuário os digitou.

const nomes = [];

for (let i = 1; i <= 5; i++) {
    const nome = prompt('Digite o seu primeiro nome:');
    nomes.push(nome);
}
console.log("Lista dos nomes digitados:");
console.log(nomes);

console.log("Nomes na ordem inversa:");
for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
}