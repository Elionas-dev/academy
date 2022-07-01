var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

var [A, B] = linhas.map(item => parseInt(item));

var PROD = A * B;

console.log(`PROD = ${PROD}`);