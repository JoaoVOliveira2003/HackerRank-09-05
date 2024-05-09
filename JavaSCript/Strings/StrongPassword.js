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


function minimumNumber(n, password) {
    let as =password
let numbers = "0123456789"
let lower_case = "abcdefghijklmnopqrstuvwxyz"
let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let special_characters = "!@#$%^&*()-+"
let required={
    chars:1,
    numbers:1,
    lower_case:1,
    upper_case:1
}
for(let a of as){
    if(special_characters.includes(a)){
        if(required.chars>0)
        required.chars-=1
        continue
    }
    if(numbers.includes(a)){
        if(required.numbers>0)
        required.numbers-=1
        continue
    }
    if(lower_case.includes(a)){
        if(required.lower_case>0)
        required.lower_case-=1
        continue
    }
    if(upper_case.includes(a)){
        if(required.upper_case>0)
        required.upper_case-=1
        continue
    }

}
let c = 0
for(let req in required){
    c+=required[req]
}
return(Math.max(6-as.length,c))
}

function main() {
    var n = parseInt(readLine());
    var password = readLine();
    var answer = minimumNumber(n, password);
    process.stdout.write("" + answer + "\n");

}