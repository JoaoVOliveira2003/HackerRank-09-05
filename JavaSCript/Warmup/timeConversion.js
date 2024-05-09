//Dado um tempo emformato AM/PM de 12-horas , converta-o para o horario militar (24 horas).


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
    inputString = inputString.trim().split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function timeConversion(s) {

// Extraindo a parte AM/PM da string
var amPm = s.substring(s.length - 2);

// Extraindo a parte da hora da string
var hour = parseInt(s.substring(0, 2));

// Ajustando a hora com base em AM ou PM
if (amPm === 'PM' && hour !== 12) {
    hour += 12;
} else if (amPm === 'AM' && hour === 12) {
    hour = 0;
}

// Preenchendo a hora com zero a esquerda, se necessário
var hourStr = hour.toString().padStart(2, '0');

// Retornando a string de tempo convertida
return hourStr + s.substring(2, s.length - 2);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
