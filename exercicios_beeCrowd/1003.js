var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

var [A, B] = linhas.map(item => parseInt(item));

var SOMA = A + B;

console.log(`SOMA = ${SOMA}`);