'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
let currentLine = 0;

rl.on('line', function(line) {
    inputLines.push(line.trim());
});

rl.on('close', function() {
    main();
});

function readLine() {
    return inputLines[currentLine++];
}

function main() {
    const n = parseInt(readLine());

    for (let a0 = 0; a0 < n; a0++) {
        const grade = parseInt(readLine());
        process.stdout.write(calculateGrade(grade) + "\n");
    }
}

function calculateGrade(grade) {
    if (grade > 37 && grade % 5 > 2) {
        return Math.ceil(grade / 5) * 5;
    } else {
        return grade;
    }
}

function gradingStudents(grades) {
    const roundedGrades = grades.map(grade => calculateGrade(grade));
    return roundedGrades;
}
