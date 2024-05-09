//basicamente cria uma subtração entre as duas diagonas de uma matriz,basicamente determinantes.
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}





function diagonalDifference(arr) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        leftDiagonalSum += arr[i][i];
        rightDiagonalSum += arr[i][n - i - 1];
    }

    return Math.abs(leftDiagonalSum - rightDiagonalSum);
}








function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
