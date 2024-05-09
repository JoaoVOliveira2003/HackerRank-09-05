/*nesse exercicio basicamente nos teremos que fazer aquela coisa de dividir a quantidade de numeros pos,zero,neg,dividido
pela quantidade de numeros que estão dentro desse vetor*/

function plusMinus(arr) {

    //criação de variaveis que seram utilizadas
    const size = arr.length;
    let pos = 0;
    let neg = 0;
    let zeroes = 0;

    /*Isso é uma função de seta que basicamente é um for que passa pelo vetor */
    arr.forEach((number) => {
        if (number > 0) pos++;
        else if (number < 0) neg++;
        else zeroes++;
    });

    /*saida dos valores,possuindo 6 numeros,pós virgula*/
    console.log((pos / size).toFixed(6));
    console.log((neg / size).toFixed(6));
    console.log((zeroes / size).toFixed(6));
}

function main() {
    //entrada de um valor com valor 10 
    const n = parseInt(readLine().trim(), 10);
    /*
    readLine(): Como explicado anteriormente, isso lê uma linha da entrada padrão.
    replace(/\s+$/g, ''): Isso remove todos os espaços em branco do final da string. \s corresponde a qualquer caractere 
    de espaço em branco, e o modificador g indica que a substituição deve ser global, ou seja, em toda a string.
    split(' '):.
    map(arrTemp => parseInt(arrTemp, 10)): Isso itera sobre cada elemento do array resultante da operação anterior. 
    Para cada elemento, parseInt(arrTemp, 10) converte a string em um número inteiro na base 10. 
    O resultado é atribuído à constante arr.
    */

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
}

//Daqui para baixo é tudo funções de entrada de dados
//Função para receber dados
function readLine() {
    return inputLines[currentLine++];
}

// dados para input
let inputString = '';
let inputLines = [];
let currentLine = 0;


process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});
