var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

var [A, B, C, D] = linhas.map(item => parseInt(item));

var DIFERENCA = (A * B - C * D);

console.log(`DIFERENCA = ${DIFERENCA}`);