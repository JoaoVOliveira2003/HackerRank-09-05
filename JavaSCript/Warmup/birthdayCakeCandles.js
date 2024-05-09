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
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}



function birthdayCakeCandles(candles) {
    // Define variaveis
    let greatestHeight = 0;
    let numCoincidences = 0;
    
    /* 
    passa pelo vetor para ver qual é maior tamanho das velas,se a vela 2 é a maior e então 
    ha a vela 3,muda de greatestHeight e então reseta o numero de numCoincidences para 1
    */
    for(let i = 0; i < candles.length; i++) {

        if (greatestHeight < candles[i]) {
            greatestHeight = candles[i];
            numCoincidences = 1;
        } else if (greatestHeight === candles[i]) {
            numCoincidences += 1;
        }
    }
    
    //return "A maior vela tem tamanho " + greatestHeight + " e aparece " + numCoincidences + " vezes.";
    return numCoincidences;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}
