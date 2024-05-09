'use strict';

const fs = require('fs');

function getTotalX(a, b) {
    var count = 0;
    var min = 1;
    var max = 100;

    a.forEach(function(val, index) {
        if (val > min) {
            min = val;
        }
    });

    b.forEach(function(val, index) {
        if (val < max) {
            max = val;
        }
    });

    for (var i = min; i <= max; i++) {
        var result = true;
        
        for (var ii = 0; ii < a.length; ii++) {
            if (i % a[ii] !== 0) {
                result = false;
                break;
            }
        }
        
        if (result) {
            for (var ii = 0; ii < b.length; ii++) {
                if (b[ii] % i !== 0) {
                    result = false;
                    break;
                }
            }
        }

        if (result) {
            count++;
        }
    }
    
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);
    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

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
