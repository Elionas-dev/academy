var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var linhas = input.split('\n');

var [A, B] = linhas.map(item => parseFloat(item));

var A = A * 3.5;
var B = B * 7.5;

var MEDIA = (A + B) / 11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);