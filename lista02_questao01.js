// Problema: Desenvolva um programa que, ao ler um determinado vetor, retorne a soma dos elementos do vetor

function sum(array) { // Função para somar os elementos de um vetor
    let arrayTotal = array.reduce((previousValue, currentValue) => previousValue + currentValue);

    return arrayTotal;
}

// Saída do programa
console.log(sum([1, 2, 3]));
console.log(sum([2, 2, 2]));
console.log(sum([1, 2, 3, 4, 5, 6]));