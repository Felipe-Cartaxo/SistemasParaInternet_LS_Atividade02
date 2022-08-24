// Problema: Desenvolva um programa que, ao ler um determinado vetor, devolva o produto dos elementos do vetor

function product (array) { // Função para calcular o produto dos elementos de um vetor
    let array_total_product = 1;

    for (let x = 0; x < (array.length); x++) {
        array_total_product *= array[x];
    }

    return array_total_product;
}

// Saída do programa
console.log(product([1, 2, 3]));
console.log(product([2, 2, 2]));
console.log(product([1, 2, 3, 4, 5, 6]));