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

function main() {
    var len = parseInt(readLine());
    var s = readLine();

function twoChars(count, sstr) {
  var r = 0;
  var isOdd = function(x) { return x & 1; };
  var isEven  = function(x) { return !( x & 1 ); };

  function validSub(n) {
    for (var i = 0; i < n.length; i++) {
      var c = n[0];
      if (isOdd(i)) {
        if (c = n[1]) {
        }
      }
      if (n[i] != c) {
        return 0;
      }
    }
    return n.length;
  }

  function getCharPairs(s) {
    var r = [];
    for (var i = 0; i < s.length - 1; i++) {
      for (var j = 0; j < s.length; j++) {
        if (s[i] == s[j]) {
          continue;
        }
        var pair = [s[i],s[j]].sort().join("");
        if (r.indexOf(pair) < 0) {
          r.push(pair);
        }
      }
    }
    return r;
  }

  var u = sstr.split('').filter(function(im, i, ar) { return ar.indexOf(im) === i; }).join('');

  var pairs = getCharPairs(u);

  for (var i = 0; i < pairs.length; i++) {
    // remove non-selected chars
    var remaining = sstr.split('').filter(function (item) { return pairs[i].indexOf(item) > -1}).join('');
    // save validSub length if greater than existing
    var newr = validSub(remaining);
    if (newr > r) {
      r = newr;
    }
  };

  console.log(r);
}

twoChars(len, s);    
    
    
}