//Desenvolva um algoritmo que preenche um vetor com os 4
//primeiros números perfeitos.

let numPerf = []

for (let n = 1; n < 10000; n++){
    let soma = 0
    for (let i = 1; i < n; i++){
        if (n % i === 0){
            soma += i
        } else {
            continue;
        }
    }
    if (soma == n) {
        numPerf.push(soma);
    }
}
console.log(numPerf)