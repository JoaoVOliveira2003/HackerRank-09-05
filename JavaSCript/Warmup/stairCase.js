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


function staircase(n) {
    //aqui basicamente N é o numero de linhas que vc quer que apareça,e i é a variavel aux.
    for (let i = 1; i <= n; i++) {
        //a linha é como ela mesma fala a linha em si.
        /*
        aqui é como sai o output 
          #  n - i / 3 - 1 / 2 espaços brancos
         ##  n - i / 3 - 2 / 1 espaços brancos
        ###  n - i / 3 - 3 / 0 espaços brancos
        
        */
        let line = ' '.repeat(n - i) + '#'.repeat(i);
        console.log(line);
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    
    staircase(n);
}
