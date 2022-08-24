// Problema: Desenvolva um programa que, ao ler um determinado vetor, retorne APENAS a soma dos elementos ímpares do vetor

function sum_Odds(array) { // Função para somar APENAS os elementos ímpares de um vetor
    let arrayOdds = array.filter((array => array % 2 == 1));
    let arrayTotal = arrayOdds.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    return arrayTotal;
}

// Saída do programa
console.log(sum_Odds([1, 2, 3]));
console.log(sum_Odds([2, 2, 2]));
console.log(sum_Odds([1, 2, 3, 4, 5, 6]));