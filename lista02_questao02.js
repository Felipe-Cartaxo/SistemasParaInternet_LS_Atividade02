// Problema: Desenvolva um programa que, ao ler um determinado vetor, devolva a soma dos elementos ímpares do vetor

function sum_Odds(array) { // Função para somar APENAS os elementos ímpares do vetor
    let array_total_odd = 0;

    for (let x = 0; x < (array.length); x++) {
        if (array[x] % 2 == 1) {
            array_total_odd += array[x];
        }
    }
    
    return array_total_odd;
}

// Saída do programa
console.log(sum_Odds([1, 2, 3]));
console.log(sum_Odds([2, 2, 2]));
console.log(sum_Odds([1, 2, 3, 4, 5, 6]));