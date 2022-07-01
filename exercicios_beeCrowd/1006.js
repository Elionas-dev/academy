var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

var [A, B, C] = linhas.map(item => parseFloat(item));

var A = A * 2;
var B = B * 3;
var C = C * 5;

var MEDIA = (A + B + C) / 10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);