/*Em resumo, este código é um programa que conta o número de palavras no estilo 
camelCase em uma string de entrada e escreve o resultado na saída.*/

/*Ele acha uma letra maiscula,e coloca um ans++, no final mostra quantas palavras com letra 
maiscula tem*/

'use strict';

const fs = require('fs');

function camelcase(s) {
    
    let ans = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i].toUpperCase() === s[i]) {
            ans++;
        }
    }
    return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = camelcase(s);

    ws.write(result + '\n');

    ws.end();
}

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
