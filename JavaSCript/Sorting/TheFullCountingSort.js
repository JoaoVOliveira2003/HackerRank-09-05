/* Aqui é basicamente voce pega uma matriz tipo [2][10],
sendo o primeiro valor um numero e dps umas letras,primeiramente vc mata a metade com [-]
e dps vc ordena com os numero
*/
/*
 Portanto, a estrutura da matriz arr é semelhante a [ [num1, str1], [num2, str2], ... ], onde num é um número inteiro e str
  é uma string.
*/

function main() {
    const n = parseInt(readLine().trim(), 10);
    let arr = Array(n);


    //Inserindo dados
    for (let i = 0; i < n; i++) {
        arr[i] = readLine().trim().split(' ');
    }

    //chamando a função.    
    countSort(arr);
}

function countSort(arr) {
    //dados 
    const minValue = 0;
    const maxValue = 99;
    const n = arr.length;

    const res = Array.from({ length: maxValue - minValue + 1 }, () => ({ n: 0, t: [] }));

    //isso garante que half sempre saira como um numero inteiro.
    const half = Math.floor(n / 2);

    arr.forEach((e, idx) => {
        const val = parseInt(e[0], 10);
        if (val >= minValue && val <= maxValue) {
            res[val].n++;

            res[val].t.push((idx < half) ? '-' : e[1]);
            /*
            let valueToAdd;
            if (idx < half) {
                valueToAdd = '-';
            } else {
             valueToAdd = e[1];
                    }
            res[val].t.push(valueToAdd);
            */
        }
    });


    //output;
    let output = [];
    res.forEach(e => {
        output = output.concat(e.t);
    });
    process.stdout.write(output.join(' ') + '\n');
}



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
