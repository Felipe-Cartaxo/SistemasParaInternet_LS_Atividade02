// Problema: Desenvolva um programa que, ao ler um determinado vetor, devolva a soma dos elementos do vetor

function sum(array) { // Função para somar os elementos do vetor
    let array_total = 0;

    for (let x = 0; x < (array.length); x++) {
        array_total += array[x];
    }

    return array_total;
}

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

// Problema: Desenvolva um programa que, ao ler um determinado vetor, devolva o produto dos elementos do vetor

function product (array) {
    let array_total_product = 1;

    for (let x = 0; x < (array.length); x++) {
        array_total_product *= array[x];
    }

    return array_total_product;
}

// Saída do programa
console.log(sum([1, 2, 3]));
console.log(sum([2, 2, 2]));
console.log(sum([1, 2, 3, 4, 5, 6]));
console.log(sum_Odds([1, 2, 3]));
console.log(sum_Odds([2, 2, 2]));
console.log(sum_Odds([1, 2, 3, 4, 5, 6]));
console.log(product([1, 2, 3]));
console.log(product([2, 2, 2]));
console.log(product([1, 2, 3, 4, 5, 6]));