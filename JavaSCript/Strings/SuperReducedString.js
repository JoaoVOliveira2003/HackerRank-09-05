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

/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
    //Enter your code here
    var continueReducing = true;
    var stringArray = s.split('');
    
    while (continueReducing) {
        continueReducing = false;
        
        for (var i = 0; i < stringArray.length - 1; i++) {
            if (stringArray[i] === stringArray[i + 1]) {
                stringArray.splice(i, 2);
                continueReducing = true;
                break;
            }
        }
    }
    
    return stringArray.length === 0 ? 'Empty String' : stringArray.join('');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
