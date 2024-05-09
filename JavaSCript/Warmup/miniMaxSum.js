/*
Aqui tem a soma do maior e a menor
[1+2+3+4+5]
min é 1+2+3+4;
max é 2+3+4+5;
*/
'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.trim().split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}











function miniMaxSum(arr) {
    var sum = function(arr) {
        return arr.reduce(function(cur, next) { return cur + next });
    };

    var numbers = arr
        .sort(function(x, y) { return x - y; });

    var min = sum(numbers.slice(0, numbers.length - 1));
    var max = sum(numbers.slice(1, numbers.length));

    /*
    function miniMaxSum(arr) {
    // Função para calcular a soma dos elementos de um array
    var sum = function(arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    };

    // Ordena o array em ordem crescente usando Bubble Sort
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // Calcula a soma mínima dos elementos do array, excluindo o último elemento
    var min = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        min += arr[i];
    }

    // Calcula a soma máxima dos elementos do array, excluindo o primeiro elemento
    var max = 0;
    for (var i = 1; i < arr.length; i++) {
        max += arr[i];
    }

    // Imprime a soma mínima e máxima no console
    console.log(min + " " + max);
    }

    */

    console.log(min + " " + max);
} 
















function main() {
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
